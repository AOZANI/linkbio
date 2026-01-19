// Efeito visual ao clicar nos botões
const links = document.querySelectorAll('.links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        link.style.boxShadow = '0 0 30px white';
        setTimeout(() => {
            link.style.boxShadow = '';
        }, 300);
    });
});
