
let display = ""
let output = document.getElementById('screen')


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

document.getElementById('decimal').addEventListener('click', function() {
    document.getElementById('screen').innerText += '.'})

document.getElementById('zero').addEventListener('click', function() {
    document.getElementById('screen').innerText += '0'})

document.getElementById('clear').addEventListener('click', function() {
    display = "";
    document.getElementById('screen').innerText = display})

function equal() {
    document.getElementById('screen').innerText = eval(document.getElementById('screen').innerText).toFixed(4)
    // would love to edit the toFixed so that it only applies when the eval returns a float
}

