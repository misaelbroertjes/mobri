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

// Validation & Sanitization (PHP 8.1+ compatible)
$name = trim(strip_tags((string)($data["name"] ?? "")));
$rawEmail = trim((string)($data["email"] ?? ""));
$email = filter_var(str_replace(["\r", "\n"], "", $rawEmail), FILTER_SANITIZE_EMAIL);
$subject = trim(strip_tags((string)($data["subject"] ?? "web-development")));
$message = trim(strip_tags((string)($data["message"] ?? "")));

if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Ongeldige invoer"]);
    exit;
}

// Subject mapping
$subjects = [
    "web-development" => "Website laten maken Aanvraag",
    "onderhoud" => "Website Onderhoud & Beheer Aanvraag",
    "design" => "Logo, Huisstijl & Webdesign Aanvraag",
    "other" => "Overig Bericht",
    // Legacy keys fallback
    "website" => "Nieuwe Website Aanvraag",
];
$mailSubject = "Nieuw bericht van mobri.nl: " . ($subjects[$subject] ?? "Overig");

// Email headers - PREVENT SPOOFING & SUPPORT UTF-8
// Always send FROM your own domain to ensure deliverability
$to = "info@mobri.nl";
$headers = "From: Mobri Website <info@mobri.nl>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
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
