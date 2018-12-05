// let buttons = document.getElementsByClassName('button')
// for (let button of buttons) {
//     button.addEventListener('click')
// }

document.getElementById('seven').addEventListener('click', function() {
    document.getElementById('screen').innerText += '7'})

document.getElementById('eight').addEventListener('click', function() {
        document.getElementById('screen').innerText += '8'})

document.getElementById('nine').addEventListener('click', function() {
    document.getElementById('screen').innerText += '9'})

document.getElementById('four').addEventListener('click', function() {
    document.getElementById('screen').innerText += '4'})

document.getElementById('five').addEventListener('click', function() {
    document.getElementById('screen').innerText += '5'})

document.getElementById('six').addEventListener('click', function() {
    document.getElementById('screen').innerText += '6'})

document.getElementById('one').addEventListener('click', function() {
    document.getElementById('screen').innerText += '1'})

document.getElementById('two').addEventListener('click', function() {
    document.getElementById('screen').innerText += '2'})

document.getElementById('three').addEventListener('click', function() {
    document.getElementById('screen').innerText += '3'})

document.getElementById('divide').addEventListener('click', function() {
    document.getElementById('screen').innerText += '/'})

document.getElementById('add').addEventListener('click', function() {
    document.getElementById('screen').innerText += '+'})

document.getElementById('subtract').addEventListener('click', function() {
    document.getElementById('screen').innerText += '-'})

document.getElementById('multiply').addEventListener('click', function() {
    document.getElementById('screen').innerText += '*'})

document.getElementById('clear').addEventListener('click', function() {
    cleared = ""
    document.getElementById('screen').innerText = cleared
})