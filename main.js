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

