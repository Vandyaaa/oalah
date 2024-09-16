let typingEffect = new Typed(".typedText", {
    strings: ["Design", "School Projects", "Interface"],
    loop: true,
    typeSpeed: 70,
    backSpeed: 80,
    backDelay: 2000
})



const bottom = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        reset: true
})
bottom.reveal('.projek', { duration: 2000 })



function openModal(src, title, description) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var descriptionText = document.getElementById("deskripsi");

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
        document.getElementById("deskripsi"),
        document.getElementById("img01"),
        document.getElementById("desc"),
        document.getElementById("caption"),
        document.getElementById("closee")
    ];
    desk.forEach(function(desk) {
        desk.classList.toggle("swapkanan");
    });
}



var prevScrollpos = window.pageYOffset;
var hed = document.getElementById("nav");
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         hed.style.top = "0";
//         hed.style.opacity = 1;
//         hed.style.height = "80px";
//         hed.style.background = "var(--dr3)";
//     } else {
//         hed.style.top = "0px";
//         hed.style.height = "65px";
//     }
//     prevScrollpos = currentScrollPos;
// }

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
