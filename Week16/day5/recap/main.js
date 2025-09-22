// alert('page loading')

function changeColor() {
    document.body.style.backgroundColor = 'red';
}

function ogColor() {
    document.body.style.backgroundColor = '';
}

function userScroll() {
    changeColor();
    setTimeout(ogColor, 1000);
}

//toggle

function swapBgColor() {
    document.body.classList.toggle('dark');
}