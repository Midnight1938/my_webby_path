const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
        // ParentNode is the parent of the current node
        // classList is the list of classes of the current node
    });
});