const photos = [
    {
        src: 'Fotos/A-leitora-MariaFernanda.jpg',
        caption: 'A Leitora - Jean-Honoré Fragonard (1772)'
    },
    {
        src: 'Fotos/MariaFernanda-A-Leitora.jfif',
        caption: 'A Leitora - Maria Fernanda (2024)'
    },
    {
        src: 'Fotos/Monalisa-Julia.jpeg',
        caption: 'Monalisa - Leonardo da Vinci (1503)'
    },
    {
        src: 'Fotos/Julia-Monalisa.jpeg',
        caption: 'Monalisa - Julia (2024)'
    }
];

let currentIndex = 0;

function updatePhotoBook() {
    const photo = document.getElementById('photo');
    const caption = document.getElementById('caption');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    photo.style.backgroundImage = `url(${photos[currentIndex].src})`;
    caption.textContent = photos[currentIndex].caption;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === photos.length - 1;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updatePhotoBook();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < photos.length - 1) {
        currentIndex++;
        updatePhotoBook();
    }
});

updatePhotoBook();