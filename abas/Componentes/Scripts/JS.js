let currentPage = 0;

function showPage(page) {
    const pages = document.querySelectorAll('.page');

    // Garante que a página fornecida esteja dentro do intervalo válido
    if (page >= 0 && page < pages.length) {
        pages.forEach((s, index) => {
            s.classList.toggle('active', index === page);
        });
        currentPage = page;
    }
}

function changePage(){
    const potenciometro_Button = document.getElementById('potenciometro_Button');
    const Button = document.getElementById('potenciometro_Butto');

    potenciometro_Button.addEventListener('click', () => 
    {
        currentPage = 0;
        showPage(currentPage);
    });
}

window.onload = function() {
    showPage(currentPage);
}

