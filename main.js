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

function copyGmail() {
    var gmailLink = document.getElementById("gmail-link");
    var originalText = gmailLink.innerHTML;

    navigator.clipboard.writeText('zzzjinwook98@gmail.com').then(function() {
        gmailLink.innerHTML = '복사완료!';
        setTimeout(function() {
            gmailLink.innerHTML = originalText;
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.more-link').addEventListener('click', function (e) {
        e.preventDefault();
        var arrow = document.getElementById('txt-arrow');
        var detailInfo = document.querySelector('.detail-info');

        arrow.classList.toggle('rotate');
        detailInfo.classList.toggle('show');
    });
});