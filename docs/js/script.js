
const audio = document.createElement('audio');
const source = document.createElement('source');
source.src = '../../assets/music.mp3';
source.type = 'audio/mp3';
audio.appendChild(source);
let music = 1;

function exploreLayers() {
    const egg3 = document.createElement('p');
    egg3.innerHTML = "👍 Si, Tranquilla";
    egg3.alt = 'Easter Egg 3';
    egg3.className = 'three';

    document.body.appendChild(egg3);
    // Ottieni il container principale
    const layerContainer = document.querySelector('.layer-container');
    const content = document.querySelector('.content');
    const gallery = document.createElement('div');
    gallery.className = 'gallery';

    // Lista di immagini e nomi dei mesi

    const months = [
        { name: 'Gennaio', image: 'http://drive.google.com/thumbnail?id=11QwWexegHgV3q_DH4edSKYTd64xpGiqP&sz=s800' },
        { name: 'Febbraio', image: 'http://drive.google.com/thumbnail?id=1ure3QqmO_zY5E2UoASudSwTtJf7PWu-0&sz=s800' },
        { name: 'Marzo', image: 'http://drive.google.com/thumbnail?id=1RQ4PfruY3kBsqd5XBXg_WUBMQjQYXTwM&sz=s800' },
        { name: 'Aprile', image: 'http://drive.google.com/thumbnail?id=1if4WJGAbN873fZpSsHAwy7ssC8HHrQfL&sz=s800' },
        { name: 'Maggio', image: 'http://drive.google.com/thumbnail?id=1uZEX_YWNpIv2c4YlWZJCJZS-89i8C2m1&sz=s800' },
        { name: 'Giugno', image: 'http://drive.google.com/thumbnail?id=1A_wwjUOHYG80QSPHD_jGuWV9JLBKMMlj&sz=s800' },
        { name: 'Luglio', image: 'http://drive.google.com/thumbnail?id=1lp9DE2biHdlF9ArEcY442XDLLWW3sejo&sz=s800' },
        { name: 'Agosto', image: 'http://drive.google.com/thumbnail?id=1WFT_Rf_6aDmI9K9ngdx9uSjK43u9m53C&sz=s800' },
        { name: 'Settembre', image: 'http://drive.google.com/thumbnail?id=1XBt-pcIFez3Ghu8oTweBdDdGCPbsIPch&sz=s800' },
        { name: 'Ottobre', image: 'http://drive.google.com/thumbnail?id=1QzzIT8h0iKlqd1LIPGdULxYsL51w6uXk&sz=s800' },
        { name: 'Novembre', image: 'http://drive.google.com/thumbnail?id=1fTUE4YZdoiKanPuLOQtLRWgc3uRt8hoZ&sz=s800' },
        { name: 'Dicembre', image: 'http://drive.google.com/thumbnail?id=16Ateyze4DGlSRR3snwtxU2A4svzipDyE&sz=s800' }
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
    document.body.appendChild(audio);
    audio.play();

    // Creazione del pulsante per cambiare canzone
    const changeSongButton = document.createElement('button');
    changeSongButton.textContent = '????';
    changeSongButton.className = 'explore';

    // Aggiungi il pulsante al body
    document.body.appendChild(changeSongButton);

    // Aggiungi evento per il pulsante
    changeSongButton.addEventListener('click', () => {
        let newAudioSource;
        // Cambia la sorgente audio quando il pulsante è premuto
        if (music === 1){
            music = 2;
            newAudioSource = '../../assets/music2.mp3';
        }
        else{
            music = 1;
            newAudioSource = '../../assets/music.mp3';
        }
        source.src = newAudioSource;
        audio.load(); // Ricarica il nuovo file audio
        audio.play(); // Avvia la nuova canzone
    });
    
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

