const year = document.getElementById("year")
const dayss = document.getElementById("days")
const hourss = document.getElementById("hours")
const minutess = document.getElementById("minutes")
const secondss = document.getElementById("seconds")
const head = document.getElementById("head")
const other = document.getElementById("other")
// head.addEventListener("click", function(){
//     other.style.transform = `translateY(${"20px"})`;
   
// })

// const newyear = new Date("Jan 1, 2023, 00:00:00").getTime()
// console.log(newyear)


function calculation(){
    var yearss = 365;
    var date = new Date()
    var today = date.getDate()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    var year = date.getFullYear() + 1;

    // var remDays = today - year
    var remHours = hours - 8760
    var remMinutes = minutes - 525600
    var remSeconds = seconds - 3.154e+7
    var remDays = today - yearss;
    // console.log(Math.abs(remSeconds))

    hourss.innerHTML = `${Math.abs(remHours)} <span>Hours</span>`
    minutess.innerHTML = `${Math.abs(remMinutes)} <span>Minutes</span>`
    secondss.innerHTML = `${Math.abs(remSeconds)} <span>Seconds</span>`
    dayss.innerHTML = `${Math.abs(remDays)} <span>Days</span>`


    
}
setInterval(calculation, -1000)