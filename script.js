const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberofSlides = slides.length;
let slideNumber = sessionStorage.getItem('slideNumber') || 0; // Ambil slideNumber dari sessionStorage jika tersedia

// Fungsi untuk menandai slide aktif
const showSlide = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[slideNumber].classList.add('active');
}

// Fungsi untuk menyimpan slideNumber ke sessionStorage
const saveSlideNumberToSessionStorage = () => {
    sessionStorage.setItem('slideNumber', slideNumber);
}

//slider next button
nextBtn.onclick = () => {
    slideNumber++;

    if (slideNumber > (numberofSlides - 1)) {
        slideNumber = 0;
    }

    saveSlideNumberToSessionStorage();
    showSlide();
}

//slider prev button
prevBtn.onclick = () => {
    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberofSlides - 1;
    }

    saveSlideNumberToSessionStorage();
    showSlide();
}

// Tampilkan slide awal ketika halaman dimuat
showSlide();
