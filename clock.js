let hrElement = document.getElementById('hr');
let minElement = document.getElementById('min');
let secElement = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hours = date.getHours(); // Corrected function call
    let minutes = date.getMinutes(); // Corrected function call
    let seconds = date.getSeconds(); // Corrected function call

    let hrotation = 30 * hours + minutes / 2;
    let mrotation = 6 * minutes;
    let srotation = 6 * seconds;

    hrElement.style.transform = `rotate(${hrotation}deg)`; // Corrected 'transform' spelling
    minElement.style.transform = `rotate(${mrotation}deg)`;
    secElement.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displayTime, 1000);
