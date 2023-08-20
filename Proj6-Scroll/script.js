const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // returns the size of an element and its position relative to the viewport.
        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}