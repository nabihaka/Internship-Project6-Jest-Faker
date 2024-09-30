<?php
require 'vendor/autoload.php';

use Faker\Factory;

// Membuat instance Faker
$faker = Factory::create();

// Menghasilkan data palsu
$name = $faker->name;
$email = $faker->email;
$question = $faker->sentence;

// Simulasi POST request
$_POST['name'] = $name;
$_POST['email'] = $email;
$_POST['question'] = $question;

// Memasukkan file proses
include 'questions_process.php';

// Cek apakah sesi feedback_message sudah disetel
session_start();
if (isset($_SESSION['feedback_message'])) {
    echo $_SESSION['feedback_message'];
} else {
    echo "Tidak ada pesan feedback.";
}
