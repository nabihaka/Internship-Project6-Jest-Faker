<?php
require 'vendor/autoload.php'; // Memuat autoloader Composer

use Faker\Factory;

$faker = Factory::create(); // Membuat instance Faker

// Menghasilkan data palsu
$name = $faker->name;
$profession = $faker->word;
$explanation = $faker->sentence;
$stars = $faker->numberBetween(1, 5);

// Simulasi POST request
$_POST['name'] = $name;
$_POST['profession'] = $profession;
$_POST['explanation'] = $explanation;
$_POST['stars'] = $stars;

// Simulasi koneksi database (gunakan mysqli atau PDO sesuai preferensi)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project5_internship";

$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Siapkan dan jalankan query
$stmt = $conn->prepare("INSERT INTO feedback (name, profession, explanation, stars) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssi", $name, $profession, $explanation, $stars);

if ($stmt->execute()) {
    echo "Feedback berhasil dikirim untuk $name.\n";
} else {
    echo "Terjadi kesalahan: " . $stmt->error . "\n";
}

// Menutup koneksi
$stmt->close();
$conn->close();
