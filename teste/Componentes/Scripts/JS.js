// script.js
let mysBtn = document
    .getElementById('scrollbuttonid');

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20
        || document.documentElement.scrollTop > 20) {
        mysBtn.style.display = 'block';
    } else {
        mysBtn.style.display = 'none';
    }
});