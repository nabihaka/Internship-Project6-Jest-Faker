<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project5_internship";

// Koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>