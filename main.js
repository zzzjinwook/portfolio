function copyEmail() {
    const emailText = document.querySelector('.contact-email').innerText;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = emailText;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showCopiedMessage();
}

function showCopiedMessage() {
    const message = document.getElementById('copiedMessage');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000);
}

const toTopButton = document.getElementById('toTopButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        toTopButton.classList.add('show');
    } else {
        toTopButton.classList.remove('show');
    }
});

toTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
