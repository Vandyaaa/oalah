<?php
// Koneksi ke database
$servername = "localhost"; // Sesuaikan dengan server database kamu
$username = "root"; // Sesuaikan dengan username database kamu
$password = ""; // Sesuaikan dengan password database kamu
$dbname = "feedback";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil data dari form
$judul = $_POST['judul'];
$nama = $_POST['nama'];
$isi = $_POST['isi'];

// Siapkan dan jalankan query untuk menyimpan data
$sql = "INSERT INTO komentar (judul, nama, isi) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $judul, $nama, $isi);

if ($stmt->execute()) {
    echo "Komentar berhasil disimpan.";
} else {
    echo "Terjadi kesalahan: " . $stmt->error;
}

// Tutup koneksi
$stmt->close();
$conn->close();
?>