    // Lista de textos para mostrar y su duración en milisegundos
    const texts = [
        { text: 'asesoría', duration: 3000 },
        { text: 'desarrollo web', duration: 3000 },
        { text: 'desarrollo móvil', duration: 3000 },
        { text: 'capacitacione', duration: 3000 },
        { text: 'análisis de datos', duration: 3000 },
        { text: 'inteligencia artificial', duration: 3000 },
        { text: 'ciberseguridad', duration: 3000 }
    ];

    // Obtener el elemento h1
    const dynamicTextElement = document.getElementById('dynamic-text');
    let currentIndex = 0;

    function updateDynamicText() {
        // Obtener el texto actual y su longitud
        const currentText = texts[currentIndex].text;
        const textLength = currentText.length;

        // Mostrar el texto actual letra por letra
        let counter = 0;
        const interval = setInterval(() => {
            dynamicTextElement.textContent = currentText.substring(0, counter);
            counter++;

            // Detener el intervalo cuando se haya mostrado todo el texto
            if (counter > textLength) {
                clearInterval(interval);

                // Pasar al siguiente texto después de un breve retraso
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % texts.length;
                    updateDynamicText();
                }, 1000);
            }
        }, 100); // Velocidad de escritura (milisegundos por letra)
    }

    // Iniciar el proceso de reescritura del texto
    updateDynamicText();
