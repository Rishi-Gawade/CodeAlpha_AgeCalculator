function calculateAge(){

let d = document.getElementById("day").value
let m = document.getElementById("month").value
let y = document.getElementById("year").value

let birthDate = new Date(y,m-1,d)
let today = new Date()

let years = today.getFullYear() - birthDate.getFullYear()
let months = today.getMonth() - birthDate.getMonth()
let days = today.getDate() - birthDate.getDate()

if(days < 0){
months--
days += 30
}

if(months < 0){
years--
months += 12
}

document.getElementById("years").innerText = years
document.getElementById("months").innerText = months
document.getElementById("days").innerText = days

}