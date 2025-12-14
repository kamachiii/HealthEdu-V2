// Organ Data Configuration
// IMPORTANT: Adjust 'top' and 'left' percentages to match the pointer position on YOUR specific image.
// These coordinates place the dot relative to the top-left corner of the container.
const organData = [
    {
        id: 'otak',
        label: 'Otak',
        // Position: Top 5%, Left 55% as a starting point. Adjust as needed.
        position: { top: '8%', left: '50%' },
        detailImage: 'assets/detail_otak.png',
        info: {
            fungsi: 'Pusat kendali sistem saraf, mengatur pikiran, ingatan, emosi, sentuhan, keterampilan motorik, penglihatan, pernapasan, suhu, rasa lapar, dan setiap proses yang mengatur tubuh kita.',
            penyakit: [
                { name: 'Stroke', desc: 'Terjadi ketika pasokan darah ke bagian otak terputus atau berkurang, mencegah jaringan otak mendapatkan oksigen dan nutrisi.' },
                { name: 'Alzheimer', desc: 'Penyakit otak progresif yang menyebabkan penurunan daya ingat, kemampuan berpikir, dan perubahan perilaku.' },
                { name: 'Meningitis', desc: 'Peradangan pada selaput pelindung yang menutupi otak dan sumsum tulang belakang.' },
                { name: 'Epilepsi', desc: 'Gangguan sistem saraf pusat di mana aktivitas otak menjadi tidak normal, menyebabkan kejang.' },
                { name: 'Tumor Otak', desc: 'Pertumbuhan sel abnormal di dalam atau di sekitar otak.' }
            ]
        }
    },
    {
        id: 'paru',
        label: 'Paru-paru',
        position: { top: '40%', left: '54%' },
        detailImage: 'assets/detail_paru.png',
        info: {
            fungsi: 'Organ utama pernapasan yang bertugas menukar oksigen dari udara dengan karbon dioksida dari darah.',
            penyakit: [
                { name: 'Pneumonia', desc: 'Infeksi yang meradang di kantung udara di satu atau kedua paru-paru.' },
                { name: 'Tuberkulosis (TBC)', desc: 'Penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis.' },
                { name: 'Asma', desc: 'Kondisi di mana saluran udara menyempit dan membengkak serta memproduksi lendir berlebih.' },
                { name: 'Kanker Paru-paru', desc: 'Kanker yang dimulai di paru-paru, seringkali karena merokok.' },
                { name: 'PPOK', desc: 'Penyakit paru obstruktif kronis, peradangan paru kronis yang menghalangi aliran udara.' }
            ]
        }
    },
    {
        id: 'jantung',
        label: 'Jantung',
        position: { top: '45%', left: '50%' },
        detailImage: 'assets/detail_jantung.png',
        info: {
            fungsi: 'Memompa darah ke seluruh tubuh untuk menyuplai oksigen dan nutrisi, serta membuang karbon dioksida dan zat sisa.',
            penyakit: [
                { name: 'Penyakit Jantung Koroner', desc: 'Terjadi ketika pembuluh darah utama yang memasok jantung rusak atau sakit.' },
                { name: 'Gagal Jantung', desc: 'Kondisi kronis di mana jantung tidak memompa darah sebagaimana mestinya.' },
                { name: 'Aritmia', desc: 'Irama jantung yang tidak normal, bisa terlalu cepat atau terlalu lambat.' },
                { name: 'Kelainan Katup Jantung', desc: 'Satu atau lebih katup jantung tidak berfungsi dengan baik.' }
            ]
        }
    },
    {
        id: 'hati',
        label: 'Hati',
        position: { top: '58%', left: '46%' },
        detailImage: 'assets/detail_hati.png',
        info: {
            fungsi: 'Menawar racun (detoksifikasi), memproduksi empedu untuk pencernaan lemak, dan menyimpan cadangan energi.',
            penyakit: [
                { name: 'Hepatitis', desc: 'Peradangan hati yang disebabkan oleh virus (Hepatitis A, B, C).' },
                { name: 'Sirosis', desc: 'Tahap akhir dari jaringan parut (fibrosis) hati.' },
                { name: 'Perlemakan Hati', desc: 'Penumpukan lemak berlebih di sel-sel hati.' },
                { name: 'Kanker Hati', desc: 'Kanker yang bermula di sel-sel hati.' }
            ]
        }
    },
    {
        id: 'lambung',
        label: 'Lambung',
        position: { top: '60%', left: '53%' },
        detailImage: 'assets/detail_lambung.png',
        info: {
            fungsi: 'Mencerna makanan secara mekanik dan kimiawi dengan bantuan enzim dan asam lambung.',
            penyakit: [
                { name: 'Gastritis (Maag)', desc: 'Peradangan pada lapisan pelindung lambung.' },
                { name: 'GERD', desc: 'Asam lambung sering naik kembali ke tabung yang menghubungkan mulut dan lambung.' },
                { name: 'Tukak Lambung', desc: 'Luka terbuka yang berkembang di lapisan dalam lambung.' },
                { name: 'Kanker Lambung', desc: 'Pertumbuhan sel abnormal di lapisan lambung.' }
            ]
        }
    },
    {
        id: 'ginjal',
        label: 'Ginjal',
        position: { top: '65%', left: '46%' }, // Note: Kidneys are behind, usually 2 points or one representative
        detailImage: 'assets/detail_ginjal.png',
        info: {
            fungsi: 'Menyaring limbah dan kelebihan cairan dari darah, yang kemudian dikeluarkan sebagai urin.',
            penyakit: [
                { name: 'Gagal Ginjal', desc: 'Ginjal kehilangan kemampuan untuk menyaring limbah dari darah.' },
                { name: 'Batu Ginjal', desc: 'Endapan keras yang terbuat dari mineral dan garam yang terbentuk di dalam ginjal.' },
                { name: 'Infeksi Ginjal', desc: 'Jenis infeksi saluran kemih yang dimulai di uretra atau kandung kemih dan naik ke ginjal.' },
                { name: 'Kista Ginjal', desc: 'Kantong berisi cairan yang terbentuk di dalam atau di permukaan ginjal.' }
            ]
        }
    },
    {
        id: 'usus',
        label: 'Usus',
        position: { top: '70%', left: '50%' },
        detailImage: 'assets/detail_usus.png',
        info: {
            fungsi: 'Menyerap nutrisi dari makanan (usus halus) dan menyerap air serta membentuk feses (usus besar).',
            penyakit: [
                { name: 'Usus Buntu', desc: 'Peradangan pada apendiks, sebuah kantong berbentuk jari yang menonjol dari usus besar.' },
                { name: 'Radang Usus', desc: 'Istilah umum untuk menggambarkan gangguan yang melibatkan peradangan kronis pada saluran pencernaan.' },
                { name: 'Sembelit', desc: 'Buang air besar yang jarang atau sulitnya mengeluarkan tinja.' },
                { name: 'Diare', desc: 'Buang air besar dengan tinja yang encer atau cair.' },
                { name: 'Kanker Kolorektal', desc: 'Kanker yang dimulai di usus besar atau rektum.' }
            ]
        }
    }
    // Add more organs here following the same structure
];

// DOM Elements
const anatomyContainer = document.getElementById('anatomyContainer');
const modal = document.getElementById('organModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalDiseases = document.getElementById('modalDiseases');

// Initialize Application
function init() {
    renderPointers();
    setupEventListeners();
}

// Render Pointers
function renderPointers() {
    organData.forEach(organ => {
        const pointer = document.createElement('div');
        pointer.classList.add('pointer-item');
        pointer.dataset.id = organ.id;

        // Apply position styles
        pointer.style.top = organ.position.top;
        pointer.style.left = organ.position.left;

        // Add label for hover tooltip
        pointer.dataset.label = organ.label;

        // Add click event for this specific pointer
        pointer.addEventListener('click', () => openModal(organ));

        anatomyContainer.appendChild(pointer);
    });
}

// Open Modal with Organ Data
function openModal(organ) {
    modalTitle.textContent = organ.label;
    modalDesc.textContent = organ.info.fungsi;
    modalImg.src = organ.detailImage;
    modalImg.alt = `Detail ${organ.label}`;

    // Clear and populate diseases list with description toggle
    modalDiseases.innerHTML = '';

    organ.info.penyakit.forEach(penyakitData => {
        const li = document.createElement('li');
        li.classList.add('disease-item');

        const nameSpan = document.createElement('div');
        nameSpan.classList.add('disease-name');
        nameSpan.textContent = penyakitData.name;

        const descDiv = document.createElement('div');
        descDiv.classList.add('disease-desc');
        descDiv.textContent = penyakitData.desc;

        li.appendChild(nameSpan);
        li.appendChild(descDiv);

        // Add Click Event to Toggle Description
        li.addEventListener('click', (e) => {
            // Optional: Close others first? Use generic 'accordion' pattern
            // For now, let's allow multiple open or just toggle self
            li.classList.toggle('active');
        });

        modalDiseases.appendChild(li);
    });

    modal.classList.add('active');
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
}

// Setup Global Event Listeners
function setupEventListeners() {
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Run init
document.addEventListener('DOMContentLoaded', init);
