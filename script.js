const images1 = [
    './img/porto.jpg', // Adicione mais imagens conforme necessário
    './img/estaleiro.jpg'
];
let currentIndex1 = 0;

const galleryImage1 = document.getElementById('galleryImage1');
const prevButton1 = document.getElementById('prevButton1');
const nextButton1 = document.getElementById('nextButton1');

function updateGallery1() {
    galleryImage1.src = images1[currentIndex1];
}

prevButton1.onclick = () => {
    currentIndex1 = (currentIndex1 > 0) ? currentIndex1 - 1 : images1.length - 1;
    updateGallery1();
};

nextButton1.onclick = () => {
    currentIndex1 = (currentIndex1 < images1.length - 1) ? currentIndex1 + 1 : 0;
    updateGallery1();
};

const images2 = [
    './img/PHOTO-2024-05-13-12-36-12.jpg', 
    './img/navio.jpg',
    './img/navio2.jpg',
    './img/navio3.jpg'
];
let currentIndex2 = 0;

const galleryImage2 = document.getElementById('galleryImage2');
const prevButton2 = document.getElementById('prevButton2');
const nextButton2 = document.getElementById('nextButton2');

function updateGallery2() {
    galleryImage2.src = images2[currentIndex2];
}

prevButton2.onclick = () => {
    currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : images2.length - 1;
    updateGallery2();
};

nextButton2.onclick = () => {
    currentIndex2 = (currentIndex2 < images2.length - 1) ? currentIndex2 + 1 : 0;
    updateGallery2();
};

// Inicializa ambas as galerias
updateGallery1();
updateGallery2();
