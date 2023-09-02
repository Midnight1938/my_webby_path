const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    const uniCode = event.key === ' ' ? 'Space' : event.key.codePointAt(0).toString(16).toUpperCase();
    
    insert.innerHTML = `
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            U+${uniCode}
            <small>event.key.codePointAt</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `;
});
