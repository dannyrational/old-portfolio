//Back to Top Function
const backToTopBtn = document.getElementById('back-top-btn')

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        backToTopBtn.classList.remove('opacity-0')
    } else {
        backToTopBtn.classList.add('opacity-0')
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}