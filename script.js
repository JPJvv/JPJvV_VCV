document.addEventListener('DOMContentLoaded', function () {
    const collapsibleHeaders = document.querySelectorAll('section h2');
    collapsibleHeaders.forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function () {
            const sectionContent = this.nextElementSibling;
            sectionContent.style.display = sectionContent.style.display === 'none' ? 'block' : 'none';
        });
    });

    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const width = skill.classList.contains('python') ? '90%' :
                      skill.classList.contains('c') ? '70%' :
                      skill.classList.contains('java') ? '80%' : '0';
        skill.style.width = width;
        skill.style.transition = 'width 2s ease-in-out';
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
