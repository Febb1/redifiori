// Gestione del menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('rotate');
    document.getElementById('menu').classList.toggle('show');
});

// Animazioni al scroll
window.addEventListener('scroll', function() {
    document.querySelectorAll('.animated-section').forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
            section.classList.add('visible');
        }
    });

    // Effetto occhio che scende e ingrandisce
    const eye = document.getElementById('eye');
    const scrollPosition = window.scrollY;
    const triggerPoint = document.body.scrollHeight * 0.001;
    const reversePoint = 200;
    
    if (scrollPosition > triggerPoint) {
        eye.classList.add('active');
    } else if (scrollPosition < reversePoint) {
        eye.classList.remove('active');
    }
});
