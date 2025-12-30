<?php
/**
 * Mobri Contact Form Handler
 * Verstuurt formuliergegevens naar info@mobri.nl via PHP mail()
 */

// Alleen POST requests toestaan
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("HTTP/1.1 405 Method Not Allowed");
    exit("Method Not Allowed");
}

// Ontvang JSON data van het React formulier
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    header("HTTP/1.1 400 Bad Request");
    exit("Geen data ontvangen");
}

// Sanitize data
$name = strip_tags(trim($data["name"]));
$email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
$subject_type = strip_tags(trim($data["subject"]));
$message = strip_tags(trim($data["message"]));

// Basis validatie
if (empty($name) || empty($email) || empty($message)) {
    header("HTTP/1.1 400 Bad Request");
    exit("Verplichte velden ontbreken");
}

// Email instellingen
$to = "info@mobri.nl";
$email_subject = "Nieuw bericht van mobri.nl: " . $subject_type;

// Email inhoud
$email_content = "Naam: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Onderwerp: $subject_type\n\n";
$email_content .= "Bericht:\n$message\n";

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Verstuur de mail
$success = mail($to, $email_subject, $email_content, $headers);

if ($success) {
    header("Content-Type: application/json");
    echo json_encode(["status" => "success", "message" => "Bericht succesvol verzonden"]);
} else {
    header("HTTP/1.1 500 Internal Server Error");
    echo json_encode(["status" => "error", "message" => "Server kon de mail niet verzenden"]);
}
?>
