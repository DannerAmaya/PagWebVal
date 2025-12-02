// Crear mariposas animadas para primera pantalla
function createButterflies() {
    const butterfliesContainer = document.getElementById('butterfliesContainer');
    if (!butterfliesContainer) return;
    
    const numButterflies = 30;
    
    for (let i = 0; i < numButterflies; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        
        // Posición inicial aleatoria
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        butterfly.style.left = startX + '%';
        butterfly.style.top = startY + '%';
        
        // Tamaño variado
        const size = 8 + Math.random() * 12;
        butterfly.style.width = size + 'px';
        butterfly.style.height = size + 'px';
        
        // Color variado (amarillo-verde como luciérnagas)
        const hue = 50 + Math.random() * 20;
        const saturation = 80 + Math.random() * 20;
        
        // Crear forma de mariposa con CSS primero
        butterfly.innerHTML = `
            <div class="butterfly-wing left-wing"></div>
            <div class="butterfly-wing right-wing"></div>
            <div class="butterfly-body"></div>
        `;
        
        // Aplicar color directamente a las alas después de crear el HTML
        const leftWing = butterfly.querySelector('.left-wing');
        const rightWing = butterfly.querySelector('.right-wing');
        const body = butterfly.querySelector('.butterfly-body');
        
        if (leftWing) {
            leftWing.style.background = `radial-gradient(circle, hsl(${hue}, ${saturation}%, 70%) 0%, hsl(${hue}, ${saturation}%, 50%) 100%)`;
            leftWing.style.boxShadow = `0 0 10px hsl(${hue}, ${saturation}%, 60%)`;
        }
        if (rightWing) {
            rightWing.style.background = `radial-gradient(circle, hsl(${hue}, ${saturation}%, 70%) 0%, hsl(${hue}, ${saturation}%, 50%) 100%)`;
            rightWing.style.boxShadow = `0 0 10px hsl(${hue}, ${saturation}%, 60%)`;
        }
        if (body) {
            body.style.background = `hsl(${hue}, 100%, 40%)`;
            body.style.boxShadow = `0 0 5px hsl(${hue}, 100%, 50%)`;
        }
        
        // Animación de movimiento suave y vuelo
        const moveX = (Math.random() - 0.5) * 400;
        const moveY = (Math.random() - 0.5) * 400;
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * 5;
        const rotation = (Math.random() - 0.5) * 360;
        
        // Crear keyframes dinámicos para vuelo de mariposa
        const styleId = `butterfly-style-${i}`;
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
        }
        
        styleEl.textContent += `
            @keyframes butterflyMove${i} {
                0% { 
                    transform: translate(0, 0) rotate(${rotation}deg);
                }
                25% { 
                    transform: translate(${moveX * 0.3}px, ${moveY * 0.3}px) rotate(${rotation + 45}deg);
                }
                50% { 
                    transform: translate(${moveX}px, ${moveY}px) rotate(${rotation + 90}deg);
                }
                75% { 
                    transform: translate(${moveX * 0.7}px, ${moveY * 0.7}px) rotate(${rotation + 135}deg);
                }
                100% { 
                    transform: translate(0, 0) rotate(${rotation + 180}deg);
                }
            }
        `;
        
        butterfly.style.animation = `butterflyMove${i} ${duration}s ease-in-out infinite, butterflyFloat 3s ease-in-out infinite`;
        butterfly.style.animationDelay = `${delay}s, ${delay * 0.3}s`;
        
        butterfliesContainer.appendChild(butterfly);
    }
}

// Crear luciérnagas animadas (mantener para compatibilidad)
function createFireflies() {
    const lightsContainer = document.getElementById('lightsContainer');
    if (!lightsContainer) return;
    
    const numFireflies = 50;
    
    for (let i = 0; i < numFireflies; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        firefly.style.left = startX + '%';
        firefly.style.top = startY + '%';
        
        const size = 3 + Math.random() * 4;
        firefly.style.width = size + 'px';
        firefly.style.height = size + 'px';
        
        const hue = 50 + Math.random() * 20;
        firefly.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
        firefly.style.boxShadow = `0 0 ${size * 3}px hsl(${hue}, 100%, 70%), 0 0 ${size * 6}px hsl(${hue}, 100%, 70%)`;
        
        // Movimiento más amplio y suave para luciérnagas
        const moveX = (Math.random() - 0.5) * 500;
        const moveY = (Math.random() - 0.5) * 500;
        const duration = 12 + Math.random() * 18;
        const delay = Math.random() * 5;
        
        // Crear keyframes dinámicos para movimiento
        const styleId = `firefly-move-${i}`;
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
        }
        
        styleEl.textContent = `
            @keyframes fireflyMove${i} {
                0% { 
                    transform: translate(0, 0);
                }
                25% { 
                    transform: translate(${moveX * 0.4}px, ${moveY * 0.4}px);
                }
                50% { 
                    transform: translate(${moveX}px, ${moveY}px);
                }
                75% { 
                    transform: translate(${moveX * 0.6}px, ${moveY * 0.6}px);
                }
                100% { 
                    transform: translate(0, 0);
                }
            }
        `;
        
        firefly.style.animation = `fireflyMove${i} ${duration}s ease-in-out infinite, fireflyGlow 2s ease-in-out infinite`;
        firefly.style.animationDelay = `${delay}s, ${delay * 0.5}s`;
        
        lightsContainer.appendChild(firefly);
    }
}

// Crear luces atmosféricas estáticas
function createLights() {
    const lightsContainer = document.getElementById('lightsContainer');
    if (!lightsContainer) return;
    
    const numLights = 20;
    
    for (let i = 0; i < numLights; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        light.style.left = x + '%';
        light.style.top = y + '%';
        
        const size = 4 + Math.random() * 3;
        light.style.width = size + 'px';
        light.style.height = size + 'px';
        
        const delay = Math.random() * 3;
        light.style.animationDelay = delay + 's';
        
        const hue = 25 + Math.random() * 15;
        light.style.backgroundColor = `hsl(${hue}, 100%, 60%)`;
        light.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 100%, 60%), 0 0 ${size * 4}px hsl(${hue}, 100%, 60%)`;
        
        lightsContainer.appendChild(light);
    }
}

// Efecto de escritura tipo máquina de escribir
function typeWriter(element, text, speed = 50, delay = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            element.textContent = '';
            element.style.opacity = '1';
            element.style.visibility = 'visible';
            
            let i = 0;
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            cursor.textContent = '|';
            element.appendChild(cursor);
            
            function type() {
                if (i < text.length) {
                    const char = text.charAt(i);
                    const textNode = document.createTextNode(char);
                    element.insertBefore(textNode, cursor);
                    i++;
                    setTimeout(type, speed);
                } else {
                    // Remover cursor después de terminar
                    setTimeout(() => {
                        cursor.remove();
                        resolve();
                    }, 500);
                }
            }
            
            type();
        }, delay);
    });
}

// Animación espectacular para los textos con efecto de escritura
async function animateText() {
    const textLines = document.querySelectorAll('.text-line');
    const ctaText = document.querySelector('.cta-text');
    
    // Guardar textos originales y limpiar
    const texts = [];
    textLines.forEach((line) => {
        texts.push(line.textContent);
        line.textContent = '';
        line.style.opacity = '0';
        line.style.visibility = 'hidden';
    });
    
    if (ctaText) {
        const ctaTextOriginal = ctaText.textContent;
        ctaText.textContent = '';
        ctaText.style.opacity = '0';
        ctaText.style.visibility = 'hidden';
        
        // Escribir cada frase una por una - cada una en ~2 segundos
        for (let i = 0; i < textLines.length; i++) {
            // Calcular velocidad para que cada frase tome ~2 segundos (2000ms)
            const textLength = texts[i].length;
            const targetTime = 2000; // 2 segundos
            const speed = Math.max(15, Math.floor(targetTime / textLength)); // mínimo 15ms por carácter
            await typeWriter(textLines[i], texts[i], speed, i * 500); // delay reducido a 500ms entre frases
        }
        
        // Escribir la última frase más grande también en ~2 segundos
        const ctaLength = ctaTextOriginal.length;
        const ctaSpeed = Math.max(15, Math.floor(2000 / ctaLength));
        await typeWriter(ctaText, ctaTextOriginal, ctaSpeed, 500);
        
        // Efecto de brillo intermitente después de escribir
        textLines.forEach((line, index) => {
            setInterval(() => {
                line.style.textShadow = '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.3)';
                setTimeout(() => {
                    line.style.textShadow = '2px 2px 8px rgba(0, 0, 0, 0.8)';
                }, 800);
            }, 4000 + index * 1000);
        });
        
        if (ctaText) {
            setInterval(() => {
                ctaText.style.textShadow = '3px 3px 10px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.4)';
                setTimeout(() => {
                    ctaText.style.textShadow = '3px 3px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 255, 255, 0.3)';
                }, 800);
            }, 5000);
        }
    }
}

// Animaciones para la primera pantalla
function animateFirstScreen() {
    // Animación del título
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.style.opacity = '0';
        mainTitle.style.transform = 'translateY(-30px)';
        mainTitle.style.transition = 'all 1s ease-out';
        
        setTimeout(() => {
            mainTitle.style.opacity = '1';
            mainTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Animación de los inputs
    const inputs = document.querySelectorAll('.reservation-form input');
    inputs.forEach((input, index) => {
        input.style.opacity = '0';
        input.style.transform = 'translateX(-20px)';
        input.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            input.style.opacity = '1';
            input.style.transform = 'translateX(0)';
        }, 800 + index * 150);
    });
    
    // Animación del botón
    const button = document.querySelector('.reserve-btn');
    if (button) {
        button.style.opacity = '0';
        button.style.transform = 'scale(0.8)';
        button.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        }, 1200);
    }
    
    // Efecto hover mejorado en inputs
    inputs.forEach(input => {
        input.addEventListener('mouseenter', () => {
            input.style.transform = 'translateY(-3px)';
            input.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.3)';
        });
        
        input.addEventListener('mouseleave', () => {
            input.style.transform = 'translateY(0)';
            input.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Efecto de parallax sutil en las decoraciones de esquina
function parallaxEffect() {
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const topLeft = document.querySelector('.corner-decoration.top-left');
        const bottomRight = document.querySelector('.corner-decoration.bottom-right');
        
        if (topLeft) {
            topLeft.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        }
        
        if (bottomRight) {
            bottomRight.style.transform = `translate(${-mouseX * 20}px, ${-mouseY * 20}px)`;
        }
    });
}

// Forzar carga de imágenes de fondo en primera pantalla
function loadBackgroundImages() {
    const wrapper1 = document.getElementById('backgroundWrapper1');
    const wrapper2 = document.getElementById('backgroundWrapper2');
    
    if (wrapper1) {
        wrapper1.style.backgroundImage = "url('Gemini_Generated_Image_x59kcmx59kcmx59k.png')";
        wrapper1.style.display = 'block';
        wrapper1.style.opacity = '1';
        wrapper1.style.zIndex = '1';
    }
    
    if (wrapper2) {
        wrapper2.style.backgroundImage = "url('Gemini_Generated_Image_x59kcmx59kcmx59k (1).png')";
        wrapper2.style.display = 'block';
        wrapper2.style.opacity = '1';
        wrapper2.style.zIndex = '1';
    }
}

// Manejo del formulario de reserva
document.addEventListener('DOMContentLoaded', () => {
    // Si estamos en la página de frases, ejecutar efectos
    if (document.querySelector('.second-screen')) {
        // Solo luciérnagas en segunda pantalla
        createFireflies();
        createLights();
        animateText();
        parallaxEffect();
    } else {
        // Primera pantalla - solo mariposas
        createButterflies();
        loadBackgroundImages();
        animateFirstScreen();
        
        // Verificar que las imágenes se cargaron
        setTimeout(() => {
            const img1 = new Image();
            img1.src = 'Gemini_Generated_Image_x59kcmx59kcmx59k.png';
            img1.onload = () => {
                console.log('Imagen 1 cargada');
                const wrapper1 = document.getElementById('backgroundWrapper1');
                if (wrapper1) {
                    wrapper1.style.backgroundImage = `url('${img1.src}')`;
                }
            };
            
            const img2 = new Image();
            img2.src = 'Gemini_Generated_Image_x59kcmx59kcmx59k (1).png';
            img2.onload = () => {
                console.log('Imagen 2 cargada');
                const wrapper2 = document.getElementById('backgroundWrapper2');
                if (wrapper2) {
                    wrapper2.style.backgroundImage = `url('${img2.src}')`;
                }
            };
        }, 100);
    }
    
    // Si hay formulario, manejar el submit
    const form = document.getElementById('reservationForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        
        // Validar que todos los campos estén llenos
        if (nombre && correo && telefono) {
            // Guardar datos en localStorage
            const reservationData = {
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                fecha: new Date().toISOString()
            };
            
            localStorage.setItem('reservationData', JSON.stringify(reservationData));
            
            // Redirigir a la pantalla de frases
            window.location.href = 'frases.html';
        } else {
            alert('Por favor, completa todos los campos');
        }
    });
    
    // Efecto de hover en los inputs
    const inputs = document.querySelectorAll('.reservation-form input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#666666';
            input.style.boxShadow = '0 0 10px rgba(102, 102, 102, 0.3)';
        });
        
        input.addEventListener('blur', () => {
            input.style.borderColor = '#444444';
            input.style.boxShadow = 'none';
        });
    });
});

