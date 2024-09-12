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
    $nama_pengguna = htmlspecialchars($nama); // Mengamankan input dari serangan XSS

    echo "
    <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Drag Web😈</title>
    <link rel='stylesheet' href='komentar.css'>
</head>

<body>
    <!-- <div class='tcuy'>hai</div> -->
    <div class='hp'>
        <div class='chat'>
            <div class='saya s1'>
            <div class='profil'></div>
                <p class='namenya'>Firdhan Abivandyaaaa</p>
            </div>

            <div class='message kir1'>
                <p>Thanks <span>$nama_pengguna</span> for sending me a message. I feel very happy</p>
            </div>

            <div class='user u1'>
            <div class='profil'></div>
                <p class='namenya'>$nama_pengguna</p>
            </div>
            <div class='message2 kan1'>
                Rausah sok-sok an nggo basa inggris le, ki carane balek pye?
            </div>

            <div class='saya s2'>
            <div class='profil'></div>
                <p class='namenya'>Firdhan Abivandya</p>
            </div>

            <div class='message kir2'>
                <p>Yang benar sj</p>
            </div>

            <div class='saya s3'>
            <div class='profil'></div>
                <p class='namenya'>Firdhan Abivandya</p>
            </div>

            <div class='message kir3'>
                <p><a href='index.html'>linkgacor88.com</a></p>
                
            </div>
        </div>
    </div>
</body>

    ";
} else {
    echo "Terjadi kesalahan: " . $stmt->error;
}

// Tutup koneksi
$stmt->close();
$conn->close();
