 

const bottom = ScrollReveal({
    
    distance: '40px',
    duration: 1000,
    opacity:0,
    origin: 'bottom',
    reset: true ,
    viewFactor: 0.1
})
bottom.reveal('.nama-sc1', {})
bottom.reveal('.featured-name', {delay:200})
bottom.reveal('.featured-name', {delay:200})
bottom.reveal('.expl', {delay:1000})
bottom.reveal('.con-downl', { delay:600})
bottom.reveal('.sl-repo', {delay:800})
bottom.reveal('.skills-list span:nth-child(1)', {delay:600, opacity:0})
bottom.reveal('.skills-list span:nth-child(2)', {delay:700, opacity:0})
bottom.reveal('.skills-list span:nth-child(3)', {delay:800, opacity:0})
bottom.reveal('.skills-list span:nth-child(4)', {delay:900, opacity:0})
bottom.reveal('.projek', {duration:1000,scale:0 , distance:'100px'})
bottom.reveal('.projects', {duration:1000})
bottom.reveal('.top-footer', {duration:2000})
bottom.reveal('.bottom-footer', {duration:2000})
bottom.reveal('.footer-social-icons', {duration:2000})
bottom.reveal('.icon:nth-child(1)', {duration:1000, delay:200})
bottom.reveal('.icon:nth-child(2)', {duration:1000, delay:400})
bottom.reveal('.icon:nth-child(3)', {duration:1000, delay:600})
bottom.reveal('.icon:nth-child(4)', {duration:1000, delay:800})
bottom.reveal('.show-all', {distance: '80px', duration: 1000})
bottom.reveal('.projek-sc4', {distance: '40px', duration: 1000})
<<<<<<< HEAD
bottom.reveal('.kirim', {distance: '0px',scale:0,delay:500, duration: 1000})
=======
>>>>>>> parent of 469bf78 (hjghjghhghghhjhjnknoiif)



const kiri = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 1000,
    opacity:0,
    reset: true     
})
kiri.reveal('.info-sc1', {delay:700})
kiri.reveal('.sosmed-sc1 a:nth-child(1)', {delay:1100, opacity:0})
kiri.reveal('.sosmed-sc1 a:nth-child(2)', {delay:1200, opacity:0})
kiri.reveal('.sosmed-sc1 a:nth-child(3)', {delay:1300, opacity:0})
kiri.reveal('.sosmed-sc1 a:nth-child(4)', {delay:1400, opacity:0})
kiri.reveal('.info-sc2', {opacity:0})
kiri.reveal('.skill-title')



const kanan = ScrollReveal({
    origin: 'right',
    distance: '40px',
    duration: 1000,
    reset: true     
})
kanan.reveal('.profil', {delay:1500})
kanan.reveal('.col', {delay:500})
kanan.reveal('.skills-box:nth-child(1)', {delay:200})
kanan.reveal('.skills-box:nth-child(2)', {delay:600})
kanan.reveal('.skills-box:nth-child(3)', {delay:800})



const atas = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true     
})
atas.reveal('.awalsc', {});
atas.reveal('form', {delay:0});



 
 let typingEffect = new Typed(".typedText",{
    strings : ["Designer","Developer","Human"],
    loop : true,
    typeSpeed : 70, 
    backSpeed : 80,
    backDelay : 2000
 })

 

function buka() {
    var kosila = document.getElementById("kosil")
    var buka = document.getElementById("menu");
    var b1 = document.getElementById("baris1");
    var b3 = document.getElementById("baris3");
    buka.classList.toggle("buka");
    kosila.classList.toggle("kosile");
    [b1, b3].forEach(function(element) {
        element.classList.toggle("silang");
    });
}



function show() {
    var rowsc3 = document.getElementById("rowsc3");
    var expand = document.getElementById("expand");
    rowsc3.classList.toggle("show");
    if (expand.innerHTML === "Show All") {
      expand.innerHTML = "Less";
      expand.style.backgroundColor = "var(--1)";
      expand.style.color = "var(--5)";
      expand.style.transition = ".5s";
    } else {
      expand.innerHTML = "Show All";
      expand.style.backgroundColor = "var(--dr3)";
      expand.style.color = "var(--1)";
    }
}

function openModal(src, title, description) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var descriptionText = document.getElementById("deskripsi");

    modal.classList.toggle("modl");
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.flexDirection = "column";
    modal.style.alignItems = "center";
    modalImg.src = src;
    captionText.innerHTML = title;
    descriptionText.innerHTML = description;
}


function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


function desk() {
    var desk = [
        document.getElementById("condesk"),
        document.getElementById("img01"),
        document.getElementById("desc"),
        document.getElementById("caption"),
        document.getElementById("closee"),
        document.getElementById("comodesc")
    ];
    desk.forEach(function(desk) {
        desk.classList.toggle("swapkanan");
    });
}









var prevScrollpos = window.pageYOffset;
var hed = document.getElementById("nav");
var ohy = document.getElementById("menu");
let sections = document.querySelectorAll("section");
let nav_links = document.querySelectorAll(".nav ul li a");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    // if (prevScrollpos > currentScrollPos) {
    //     hed.style.top = "0";
    //     hed.style.opacity = 1;
    //     hed.style.height = "80px";
    //     hed.style.background = "var(--dr3)";
    // } else {
    //     if (!ohy.classList.contains("open")) {
    //         hed.style.top = "0px";
    //         hed.style.height = "65px";
    //     } else {
    //         hed.style.top = "0";
    //         hed.style.opacity = 1;
    //     }
    // }
sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let id = section.getAttribute("id");
    if (top >= offset + - 100) {
        nav_links.forEach(link => {
            link.classList.remove("active");
            document.querySelector(".nav ul li a[href*=" + id + "]").classList.add("active");
        })
    }
})

    prevScrollpos = currentScrollPos;
}


document.addEventListener("DOMContentLoaded", setActiveLink);
window.addEventListener("scroll", setActiveLink);
function setActiveLink() {
    let top = window.scrollY;
    sections.forEach(section => {
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");
        // Menambahkan 100px sebagai offset tambahan (sesuaikan nilai ini dengan kebutuhan)
        if (top >= offset - 100 && top < offset + height - 100) {
            nav_links.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".nav ul li a[href*=" + id + "]").classList.add("active");
            });
        }
    });
}



function redirectToWhatsApp() {
    // Ambil nilai input dari form
    var nama = document.getElementById('nama').value.trim();
    var judul = document.getElementById('judul').value.trim();
    var isi = document.getElementById('isi').value.trim();

    // Elemen untuk pesan error
    var errorMessageDiv = document.getElementById('error-messages');
    
    // Reset pesan error
    errorMessageDiv.textContent = "";

    // Validasi jika input masih kosong
    if (!nama || !judul || !isi) {
        // Tampilkan pesan error di dalam div
        errorMessageDiv.innerHTML = '<div id="error-message"><i class="fi fi-br-exclamation"></i>please fill in all fields</div>';
        errorMessageDiv.style.bottom = '10px';
        errorMessageDiv.style.opacity = '1';
        
        return; // Hentikan fungsi jika ada input yang kosong
    }

    

    // Nomor WhatsApp yang dituju (sesuaikan dengan nomor tujuan)
    var phoneNumber = '6287739770494'; 

    // Format pesan dengan Nama dan Judul menjadi teks bold dan italic
    var message = `*_*Nama:*_* ${nama}\n*_*Judul:*_* ${judul}\nPesan: ${isi}`;

    // Encode pesan agar aman untuk URL
    var encodedMessage = encodeURIComponent(message);

    // URL untuk mengarahkan ke WhatsApp
    var url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Buka halaman WhatsApp dengan URL yang disiapkan
    window.open(url);
}


// document.addEventListener('mousemove', function(e) {
//     var mouseDiv = document.querySelector('.mouse-follow');
//     mouseDiv.style.left = e.pageX + 'px';
//     mouseDiv.style.top = e.pageY + 'px';
// });

  // Dapatkan elemen button
        var backToTopButton = document.getElementById("backToTop");

        // Fungsi untuk memantau posisi scroll
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTopButton.style.bottom = "20px"; // Tampilkan tombol jika scroll > 1000px
            } else {
                backToTopButton.style.bottom = "-100%";
                
            }
        };

        // Fungsi untuk scroll kembali ke atas
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Efek smooth scrolling
            });
        }