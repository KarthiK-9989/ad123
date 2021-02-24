const hour = document.getElementById('hr');
const minute = document.getElementById('min');
const second = document.getElementById('sec');

setInterval(() => {
    let date = new Date();
    let hr = date.getHours() * 30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;
    hour.style.transform = `rotateZ(${(hr)+(min/12)}deg)`;
    minute.style.transform = `rotateZ(${(min)}deg)`;
    second.style.transform = `rotateZ(${(sec)}deg)`;

})

var myAudio = document.getElementById('audio');
var selectElement = document.querySelector('#select1');
var output = selectElement.options[selectElement.selectedIndex].value;

document.querySelector('.output').textContent = output;
var ply = document.getElementById('play');
var count = 0;

function play() {

    myAudio.play();

}

function pause() {
    myAudio.pause();
}