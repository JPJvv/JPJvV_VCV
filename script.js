document.addEventListener('DOMContentLoaded', function () {
    const collapsibleHeaders = document.querySelectorAll('section h2');
    collapsibleHeaders.forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function () {
            const sectionContent = this.nextElementSibling;
            sectionContent.style.display = sectionContent.style.display === 'none' ? 'block' : 'none';
        });
    });
});
