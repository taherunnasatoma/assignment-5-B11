document.getElementById('theme').addEventListener('click', function () {
    const randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    document.body.style.backgroundColor = randomColor;
});


function randomNumber() {
    return Math.floor(Math.random() * 256);
}
