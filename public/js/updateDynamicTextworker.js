let currentIndex;

// Escuchar mensajes del hilo principal
onmessage = function(event) {
    const { type, currentIndex: index } = event.data;
    if (type === 'init') {
        currentIndex = index;
        updateDynamicText();
    }
};

const texts = [
    { text: 'asesoría', duration: 3000 },
    { text: 'desarrollo web', duration: 3000 },
    { text: 'desarrollo móvil', duration: 3000 },
    { text: 'capacitacione', duration: 3000 },
    { text: 'análisis de datos', duration: 3000 },
    { text: 'inteligencia artificial', duration: 3000 },
    { text: 'ciberseguridad', duration: 3000 }
];

function updateDynamicText() {
    const currentText = texts[currentIndex].text;
    const textLength = currentText.length;
    let counter = 0;

    const interval = setInterval(() => {
        postMessage({ type: 'text', data: currentText.substring(0, counter) });
        counter++;

        if (counter > textLength) {
            clearInterval(interval);
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                updateDynamicText();
            }, 1000);
        }
    }, 100);
}
