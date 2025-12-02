// Sistema completo de carga de imágenes como fondos
class ImageLoader {
    constructor() {
        this.init();
    }

    init() {
        // Cargar imágenes guardadas al cargar la página
        this.loadSavedBackgrounds();
        
        // Configurar eventos para cargar imágenes
        this.setupBackgroundLoaders();
    }

    // Cargar imágenes de fondo guardadas en localStorage
    loadSavedBackgrounds() {
        // Primera pantalla - Fondo 1
        const savedBg1 = localStorage.getItem('backgroundImage1');
        if (savedBg1) {
            const wrapper1 = document.getElementById('backgroundWrapper1');
            if (wrapper1) {
                wrapper1.style.backgroundImage = `url(${savedBg1})`;
                wrapper1.querySelector('.background-placeholder').style.display = 'none';
            }
        }

        // Primera pantalla - Fondo 2
        const savedBg2 = localStorage.getItem('backgroundImage2');
        if (savedBg2) {
            const wrapper2 = document.getElementById('backgroundWrapper2');
            if (wrapper2) {
                wrapper2.style.backgroundImage = `url(${savedBg2})`;
                wrapper2.querySelector('.background-placeholder').style.display = 'none';
            }
        }

        // Segunda pantalla - Fondo
        const savedBgSecond = localStorage.getItem('backgroundImageSecond');
        if (savedBgSecond) {
            const rightColumn = document.getElementById('rightColumnBackground');
            const placeholder = document.getElementById('backgroundPlaceholderSecond');
            if (rightColumn) {
                rightColumn.style.backgroundImage = `url(${savedBgSecond})`;
                if (placeholder) {
                    placeholder.style.display = 'none';
                }
            }
        }
    }

    // Configurar los eventos para cargar fondos
    setupBackgroundLoaders() {
        // Primera pantalla - Fondo 1
        const upload1 = document.getElementById('backgroundUpload1');
        const wrapper1 = document.getElementById('backgroundWrapper1');
        if (upload1 && wrapper1) {
            wrapper1.addEventListener('click', () => {
                upload1.click();
            });
            upload1.addEventListener('change', (e) => {
                this.handleBackgroundUpload(e, 'backgroundWrapper1', 'backgroundImage1');
            });
        }

        // Primera pantalla - Fondo 2
        const upload2 = document.getElementById('backgroundUpload2');
        const wrapper2 = document.getElementById('backgroundWrapper2');
        if (upload2 && wrapper2) {
            wrapper2.addEventListener('click', () => {
                upload2.click();
            });
            upload2.addEventListener('change', (e) => {
                this.handleBackgroundUpload(e, 'backgroundWrapper2', 'backgroundImage2');
            });
        }

        // Segunda pantalla - Fondo
        const uploadSecond = document.getElementById('backgroundUploadSecond');
        const placeholderSecond = document.getElementById('backgroundPlaceholderSecond');
        if (uploadSecond) {
            if (placeholderSecond) {
                placeholderSecond.addEventListener('click', () => {
                    uploadSecond.click();
                });
            }
            uploadSecond.addEventListener('change', (e) => {
                this.handleBackgroundUploadSecond(e);
            });
        }
    }

    // Manejar la carga de un fondo para primera pantalla
    handleBackgroundUpload(event, wrapperId, storageKey) {
        const file = event.target.files[0];
        if (!file) return;

        // Validar que sea una imagen
        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecciona un archivo de imagen válido');
            return;
        }

        // Validar tamaño (máximo 10MB para fondos)
        if (file.size > 10 * 1024 * 1024) {
            alert('La imagen es demasiado grande. Por favor, selecciona una imagen menor a 10MB');
            return;
        }

        const reader = new FileReader();
        
        reader.onload = (e) => {
            const imageData = e.target.result;
            const wrapper = document.getElementById(wrapperId);

            if (wrapper) {
                // Establecer como fondo
                wrapper.style.backgroundImage = `url(${imageData})`;
                wrapper.style.backgroundSize = 'cover';
                wrapper.style.backgroundPosition = 'center';
                wrapper.style.backgroundRepeat = 'no-repeat';
                
                // Ocultar el placeholder
                const placeholder = wrapper.querySelector('.background-placeholder');
                if (placeholder) {
                    placeholder.style.display = 'none';
                }

                // Guardar en localStorage
                localStorage.setItem(storageKey, imageData);

                // Mostrar mensaje de éxito
                this.showSuccessMessage('Fondo cargado exitosamente');
            }
        };

        reader.onerror = () => {
            alert('Error al cargar la imagen. Por favor, intenta de nuevo.');
        };

        reader.readAsDataURL(file);
    }

    // Manejar la carga de fondo para segunda pantalla
    handleBackgroundUploadSecond(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Validar que sea una imagen
        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecciona un archivo de imagen válido');
            return;
        }

        // Validar tamaño (máximo 10MB para fondos)
        if (file.size > 10 * 1024 * 1024) {
            alert('La imagen es demasiado grande. Por favor, selecciona una imagen menor a 10MB');
            return;
        }

        const reader = new FileReader();
        
        reader.onload = (e) => {
            const imageData = e.target.result;
            const rightColumn = document.getElementById('rightColumnBackground');
            const placeholder = document.getElementById('backgroundPlaceholderSecond');

            if (rightColumn) {
                // Establecer como fondo
                rightColumn.style.backgroundImage = `url(${imageData})`;
                rightColumn.style.backgroundSize = 'cover';
                rightColumn.style.backgroundPosition = 'center';
                rightColumn.style.backgroundRepeat = 'no-repeat';
                
                // Ocultar el placeholder
                if (placeholder) {
                    placeholder.style.display = 'none';
                }

                // Guardar en localStorage
                localStorage.setItem('backgroundImageSecond', imageData);

                // Mostrar mensaje de éxito
                this.showSuccessMessage('Fondo cargado exitosamente');
            }
        };

        reader.onerror = () => {
            alert('Error al cargar la imagen. Por favor, intenta de nuevo.');
        };

        reader.readAsDataURL(file);
    }

    // Mostrar mensaje de éxito
    showSuccessMessage(message) {
        // Crear elemento de mensaje
        const messageEl = document.createElement('div');
        messageEl.className = 'image-success-message';
        messageEl.textContent = message;
        document.body.appendChild(messageEl);

        // Animar entrada
        setTimeout(() => {
            messageEl.classList.add('show');
        }, 10);

        // Remover después de 3 segundos
        setTimeout(() => {
            messageEl.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(messageEl);
            }, 300);
        }, 3000);
    }

    // Método para eliminar un fondo
    removeBackground(wrapperId, storageKey) {
        const wrapper = document.getElementById(wrapperId);
        const placeholder = wrapper ? wrapper.querySelector('.background-placeholder') : null;

        if (wrapper) {
            wrapper.style.backgroundImage = 'none';
            
            if (placeholder) {
                placeholder.style.display = 'flex';
            }

            localStorage.removeItem(storageKey);
        }
    }
}

// Inicializar el cargador de imágenes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.imageLoader = new ImageLoader();
});

