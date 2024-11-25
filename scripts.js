document.querySelectorAll('.lesson-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling; 
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

AOS.init({
    duration: 1000, 
    easing: 'ease-out-back',
    once: true,
});
