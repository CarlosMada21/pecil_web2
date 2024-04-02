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


    let items = document.querySelectorAll('.sliderServicios .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    
    // config param
    let countItem = items.length;
    let itemActive = 0;
    // event next click
    next.onclick = function(){
        itemActive = itemActive + 1;
        if(itemActive >= countItem){
            itemActive = 0;
        }
        showSlider();
    }
    //event prev click
    prev.onclick = function(){
        itemActive = itemActive - 1;
        if(itemActive < 0){
            itemActive = countItem - 1;
        }
        showSlider();
    }
    // auto run slider
    let refreshInterval = setInterval(() => {
        next.click();
    }, 10000)
    function showSlider(){
        // remove item active old
        let itemActiveOld = document.querySelector('.sliderServicios .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');
    
        // active new item
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
    
        // clear auto time run slider
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 10000)
    }
    
    // click thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        })
    })

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
    
        // Obtener los datos del formulario
        const formData = new FormData(this);
    
        // Enviar los datos a tu servidor
        fetch('/enviar-correo', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Mensaje enviado correctamente');
                // Restablecer el formulario después de enviar el mensaje
                this.reset();
            } else {
                alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.');
            }
        })
        .catch(error => {
            console.error('Error al enviar el mensaje:', error);
            alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.');
        });
    });
    