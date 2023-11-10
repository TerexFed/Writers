const blockquotes = document.querySelectorAll('blockquote');
const figcaptions = document.querySelectorAll('figcaption');

figcaptions.forEach((figcaption, index) => {
    figcaption.addEventListener('mouseover', () => {
        blockquotes[index].style.transition = '0.7s'
        blockquotes[index].style.opacity = '1';
    });

    figcaption.addEventListener('mouseout', () => {
        blockquotes[index].style.opacity = '0';
    });
});