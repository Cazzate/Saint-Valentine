function exploreLayers() {
    // Ottieni il container principale
    const layerContainer = document.querySelector('.layer-container');
    const content = document.querySelector('.content');
    const gallery = document.createElement('div');
    gallery.className = 'gallery';

    // Lista di immagini e nomi dei mesi
    const months = [
        { name: 'Gennaio', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Febbraio', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Marzo', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Aprile', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Maggio', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Giugno', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Luglio', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Agosto', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Settembre', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Ottobre', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Novembre', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' },
        { name: 'Dicembre', image: 'https://openclipart.org/image/2400px/svg_to_png/194077/Placeholder.png' }
    ];

    // Aggiungi immagini con il nome del mese alla galleria
    months.forEach(({ name, image }) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const title = document.createElement('h2');
        title.textContent = name;

        const img = document.createElement('img');
        img.src = image;
        img.alt = name;

        item.appendChild(img);
        item.appendChild(title);
        gallery.appendChild(item);
    });

    // Aggiungi la galleria al body
    document.body.appendChild(gallery);

    // Aggiungi la classe di sfumatura
    layerContainer.classList.add('fade-out');

    // Dopo l'animazione, mostra la galleria
    setTimeout(() => {
        layerContainer.style.display = 'none';
        gallery.style.display = 'grid';
    }, 2000); // 2 secondi per sincronizzarsi con l'animazione
}
function addEasterEggs() {
    // Crea gli elementi delle immagini easter egg
    const egg1 = document.createElement('img');
    egg1.src = 'https://i.ibb.co/PDgnt0S/GPF039-01-29631.png';
    egg1.alt = 'Easter Egg 1';
    egg1.className = 'easter-egg one'; // Classe per la prima immagine

    const egg2 = document.createElement('img');
    egg2.src = 'https://i.ibb.co/bFdr8pF/GPF085-01-35929.png';
    egg2.alt = 'Easter Egg 2';
    egg2.className = 'easter-egg two'; // Classe per la seconda immagine

    // Aggiungi le immagini alla pagina
    document.body.appendChild(egg1);
    document.body.appendChild(egg2);

    // Mostra le immagini come easter egg quando si clicca sulla pagina
    document.body.addEventListener('click', () => {
        egg1.classList.toggle('show'); // Mostra/nascondi la prima immagine
        egg2.classList.toggle('show'); // Mostra/nascondi la seconda immagine
    });
}

// Chiamare la funzione per aggiungere gli easter eggs al caricamento della pagina
addEasterEggs();
