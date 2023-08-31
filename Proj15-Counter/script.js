const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 235;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1); // timeout calls it after certain amount of time
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
})