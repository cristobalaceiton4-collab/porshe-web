// Obtener referencias a los elementos
const video = document.getElementById('porscheVideo');
const title = document.getElementById('title');

// Reproducir el video cuando se carga la página
window.addEventListener('load', () => {
    // Intentar reproducir automáticamente
    video.play().catch(error => {
        console.log('Autoplay bloqueado por el navegador.');
        console.log('Haz clic en cualquier parte de la página para iniciar el video.');
        
        // Si el autoplay está bloqueado, reproducir con un clic del usuario
        document.addEventListener('click', () => {
            video.play();
        }, { once: true });
    });
});

// Detectar cuando el video termina
video.addEventListener('ended', function() {
    // Congelar el video en el último frame
    video.pause();
    
    // Mostrar el título con animación después de 200ms
    setTimeout(() => {
        title.classList.add('show');
    }, 200);
});

// Asegurar que el video no se repita
video.loop = false;

// Opcional: Mostrar en consola cuando el video está listo
video.addEventListener('loadeddata', () => {
    console.log('Video cargado y listo para reproducir');
});

// Opcional: Detectar errores al cargar el video
video.addEventListener('error', (e) => {
    console.error('Error al cargar el video:', e);
    alert('No se pudo cargar el video. Verifica que el archivo existe y está en la carpeta correcta.');
});
```

---

## 📁 **Estructura final:**
```
Mi-Proyecto-Porsche/
├── index.html          ← Pega el código HTML aquí
├── styles.css          ← Pega el código CSS aquí
├── script.js           ← Pega el código JavaScript aquí
└── porshe-video-inicio.mp4  ← Tu video aquí