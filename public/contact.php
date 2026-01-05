<?php
/**
 * Mobri Contact Form Handler
 * Verstuurt formuliergegevens naar info@mobri.nl via PHP mail()
 */

session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Security 1: Rate Limiting
$now = time();
$limit = 5; // Max 5 submissions
$window = 3600; // Per hour

if (!isset($_SESSION['form_submissions'])) {
    $_SESSION['form_submissions'] = [];
}

// Clean old entries
$_SESSION['form_submissions'] = array_filter(
    $_SESSION['form_submissions'], 
    fn($time) => $time > $now - $window
);

// Check limit
if (count($_SESSION['form_submissions']) >= $limit) {
    http_response_code(429);
    echo json_encode(["status" => "error", "message" => "Te veel verzoeken. Probeer het later opnieuw."]);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Geen data ontvangen"]);
    exit;
}

// Security 2: Honeypot (simple bot trap)
// Expect 'website' field to be empty. Bots often fill all fields.
$honeypot = isset($data["website"]) ? trim($data["website"]) : "";
if (!empty($honeypot)) {
    // Pretend success to fool bots
    http_response_code(200);
    echo json_encode(["status" => "success"]);
    exit;
}

// Log valid submission
$_SESSION['form_submissions'][] = $now;

// Validation
$name = filter_var($data["name"] ?? "", FILTER_SANITIZE_STRING);
$email = filter_var($data["email"] ?? "", FILTER_SANITIZE_EMAIL);
$subject = filter_var($data["subject"] ?? "website", FILTER_SANITIZE_STRING);
$message = filter_var($data["message"] ?? "", FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Ongeldige invoer"]);
    exit;
}

// Subject mapping
$subjects = [
    "website" => "Nieuwe Website Aanvraag",
    "va" => "Virtual Assistant Aanvraag",
    "design" => "Design Hulp Nodig",
    "other" => "Overig Bericht"
];
$mailSubject = "Nieuw bericht van mobri.nl: " . ($subjects[$subject] ?? "Overig");

// Email headers - PREVENT SPOOFING
// Always send FROM your own domain to ensure deliverability
$to = "info@mobri.nl";
$headers = "From: info@mobri.nl\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$emailBody = "Er is een nieuw bericht ontvangen via het contactformulier:\n\n";
$emailBody .= "Naam: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Onderwerp: " . ($subjects[$subject] ?? $subject) . "\n\n";
$emailBody .= "Bericht:\n$message\n";

if (mail($to, $mailSubject, $emailBody, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Kon e-mail niet versturen"]);
}
?>
