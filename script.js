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
        skill.style.width = 0;
        skill.style.animation = `fillSkillBar 2s ease-in-out forwards`;
    });
});
