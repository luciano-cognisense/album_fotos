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
        caption: 'Monalisa - Júlia (2024)'
    },
    {
        src: 'Fotos/OGrito-JoãoDelevatti.jpeg',
        caption: 'O Grito - Edvard Munch(1893)'
    },
    {
        src: 'Fotos/JoãoDelevatti-OGrito.jpeg',
        caption: 'O Grito - João Delevatti (2024)'
    },
    {
        src: 'Fotos/Moca_com_brinco_de_Perola-AnaClara.jpeg',
        caption: 'Moça com Brinco de Pérola - Johannes Vermeer (1665)'
    },
    {
        src: 'Fotos/AnaClara-Moca_com_brinco_de_Perola.jpeg',
        caption: 'Moça com Brinco de Pérola - Ana Clara (2024)'
    },
    {
        src: 'Fotos/OFilhoDoHomem-Gustavo.jpeg',
        caption: 'O Filho do Homem - Rene Magritte (1964)'
    },
    {
        src: 'Fotos/Gustavo-OFilhoDoHomem.jpeg',
        caption: 'O Filho do Homem - Gustavo (2024)'
    },
    {
        src: 'Fotos/OCavalheiroSorridente-Murilo.jpg',
        caption: 'O Cavalheiro Sorridente - Frans Hals (1624)'
    },
    {
        src: 'Fotos/Murilo-OCavalheiroSorridente.jpg',
        caption: 'O Cavalheiro Sorridente - Murilo (2024)'
    },
    {
        src: 'Fotos/DamacomArminho-Rafaela.jpg',
        caption: 'Dama com Arminho - Leonardo da Vinci (1489)'
    },
    {
        src: 'Fotos/Rafaela-DamacomArminho.jpeg',
        caption: 'Dama com Arminho - Rafaela (2024)'
    },
    {
        src: 'Fotos/Mulhercomumguarda-sol-Diana.jpeg',
        caption: 'Mulher com um guarda-sol - Claude Monet (1886)'
    },
    {
        src: 'Fotos/Diana-Mulhercomumguarda-sol.jpeg',
        caption: 'Mulher com um guarda-sol - Diana (2024)'
    },
    {
        src: 'Fotos/FridaKahlo-Gaia.jpeg',
        caption: 'Auto retrato dedicado ao Dr. Eloesser - Frida Kahlo (1940)'
    },
    {
        src: 'Fotos/Gaia-FridaKahlo.jpeg',
        caption: 'Auto retrato dedicado ao Dr. Eloesser - Gaia (2024)'
    },
    {
        src: 'Fotos/RetratoDeUmaMullher-Ania.jpg',
        caption: 'Retrato de uma Mulher - Rogier van der Weyden (1464)'
    },
    {
        src: 'Fotos/Ania-RetratoDeUmaMullher.jpeg',
        caption: 'Retrato de uma Mulher - Ania (2024)'
    },
    {
        src: 'Fotos/GelberNarrenhut-Benicio.jpeg',
        caption: 'Gelber Narrenhut - Rudolf Hausner (1940)'
    },
    {
        src: 'Fotos/Benicio-GelberNarrenhut.jpeg',
        caption: 'Gelber Narrenhut - Benício (2024)'
    },
    {
        src: 'Fotos/RetratodeumaJovemMulher-Daniela.jpg',
        caption: 'Retrato de uma Jovem Mulher - Élisabeth-Louise Vigée-Le Brun (1797)'
    },
    {
        src: 'Fotos/Daniela-RetratodeumaJovemMulher.jpeg',
        caption: 'Retrato de uma Jovem Mulher - Daniela (2024)'
    },
    {
        src: 'Fotos/FugindoDaCritica-JoaoPedro.jpg',
        caption: 'Fugindo da Crítica - Pere Borrell del Caso (1874)'
    },
    {
        src: 'Fotos/JoaoPedro-FugindoDaCritica.jpeg',
        caption: 'Fugindo da Crítica - João Pedro (2024)'
    },
    {
        src: 'Fotos/MeninoComUmaBanana-Leonel.jpeg',
        caption: 'Menino com uma banana - Almeida Júnior (1797)'
    },
    {
        src: 'Fotos/Leonel-MeninoComUmaBanana.jpeg',
        caption: 'Menino com uma banana - Leonel (2024)'
    },
    {
        src: 'Fotos/LaToilette-LiviaBlansk.jpeg',
        caption: 'La Toilette - mulher penteando seu cabelo - Renoir (1894)'
    },
    {
        src: 'Fotos/LiviaBlansk-LaToilette.jpeg',
        caption: 'La Toilette - mulher penteando seu cabelo - Lívia B. (2024)'
    },
    {
        src: 'Fotos/EstudoOleo-LiviaWolf.jpg',
        caption: 'Estudo em Óleo - John William Waterhouse (1917)'
    },
    {
        src: 'Fotos/LiviaWolf-EstudoOleo.jpeg',
        caption: 'Estudo em Óleo - Lívia W. (2024)'
    },
    {
        src: 'Fotos/MeninoECoelho-Luke.jpeg',
        caption: 'Menino e coelho - Henry Raeburn (1814)'
    },
    {
        src: 'Fotos/Luke-MeninoECoelho.jpeg',
        caption: 'Menino e coelho - Luke (2024)'
    },
    {
        src: 'Fotos/OTocadorDeViolao-Samuel.jpeg',
        caption: 'O Tocador de Violão - Paul Sieffert (1925)'
    },
    {
        src: 'Fotos/Samuel-OTocadorDeViolao.jpeg',
        caption: 'O Tocador de Violão - Samuel (2024)'
    },
    {
        src: 'Fotos/GarotaNaJanela-Lis.png',
        caption: 'Garota na Janela - Salvador Dalí (1925)'
    },
    {
        src: 'Fotos/Lis-GarotaNaJanela.jfif',
        caption: 'Garota na Janela - Lis (2024)'
    },
    {
        src: 'Fotos/Letoile-Beatriz.png',
        caption: 'A Estrela - Edgar Degas (1878)'
    },
    {
        src: 'Fotos/Beatriz-Letoile.jpeg',
        caption: 'A Estrela - Beatriz (2024)'
    }
];

let currentIndex = 0;

function updatePhotoBook() {
    const photo = document.getElementById('photo');
    const caption = document.getElementById('caption');
    const pageNumber = document.getElementById('pageNumber');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    photo.src = photos[currentIndex].src;
    photo.alt = photos[currentIndex].caption;
    caption.textContent = photos[currentIndex].caption;
    pageNumber.textContent = `Página ${currentIndex + 1} de ${photos.length}`;

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

document.addEventListener('keydown', (event) => {
    if (document.getElementById('photoViewer').open || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft') document.getElementById('prevBtn').click();
    if (event.key === 'ArrowRight') document.getElementById('nextBtn').click();
});

// Preserve vertical scrolling and pinch zoom; only a clear one-finger swipe navigates.
const photoSurface = document.getElementById('photo');
let swipeStart = null;
let suppressPhotoClickUntil = 0;
photoSurface.addEventListener('touchstart', (event) => {
    swipeStart = event.touches.length === 1
        ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
}, { passive: true });
photoSurface.addEventListener('touchend', (event) => {
    if (!swipeStart || event.touches.length) { swipeStart = null; return; }
    const dx = event.changedTouches[0].clientX - swipeStart.x;
    const dy = event.changedTouches[0].clientY - swipeStart.y;
    swipeStart = null;
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        suppressPhotoClickUntil = Date.now() + 500;
        document.getElementById(dx < 0 ? 'nextBtn' : 'prevBtn').click();
    }
}, { passive: true });
photoSurface.addEventListener('touchcancel', () => { swipeStart = null; }, { passive: true });

const photoViewer = document.getElementById('photoViewer');
const viewerImage = document.getElementById('viewerImage');
function openPhotoViewer() {
    if (Date.now() < suppressPhotoClickUntil || photoViewer.open) return;
    viewerImage.src = photoSurface.src;
    viewerImage.alt = photoSurface.alt;
    photoViewer.showModal();
    document.body.classList.add('viewer-open');
    // Use native fullscreen where available; the dialog fills the screen otherwise.
    if (photoViewer.requestFullscreen && document.fullscreenEnabled) {
        photoViewer.requestFullscreen().then(() => {
            if (!photoViewer.open && document.fullscreenElement === photoViewer) {
                document.exitFullscreen().catch(() => {});
            }
        }).catch(() => {});
    }
}
function closePhotoViewer() {
    if (photoViewer.open) photoViewer.close();
}
photoSurface.addEventListener('click', openPhotoViewer);
photoSurface.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPhotoViewer();
    }
});
document.getElementById('closeViewer').addEventListener('click', closePhotoViewer);
photoViewer.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    if (document.fullscreenElement === photoViewer) document.exitFullscreen().catch(() => {});
    photoSurface.focus();
});
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) closePhotoViewer();
});
