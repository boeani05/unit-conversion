/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("head-enter")
const btn = document.getElementById("head-btn")
const feet = 3.281
const gallons = 0.264
const pounds = 2.204

let length = document.getElementById("result-length")
let volume = document.getElementById("result-volume")
let mass = document.getElementById("result-mass")

btn.addEventListener("click", function() {
    const value = input.value
    
    length.textContent = `${value} meters = ${(feet * value).toFixed(3)} feet | ${value} feet = ${(value / feet).toFixed(3)} meters`
    volume.textContent = `${value} liters = ${(gallons * value).toFixed(3)} gallons | ${value} gallons = ${(value / gallons).toFixed(3)} liters`
    mass.textContent = `${value} kilos = ${(pounds * value).toFixed(3)} pounds | ${value} pounds = ${(value / pounds).toFixed(3)} kilos`
})
