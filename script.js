let quote;
let quoteArray;
let right = 0;
let wrong = 0
var sec = 0;
var min = 0;
var startTime = Date.now();
var quote1 = document.querySelector('.quote')

function matching() {
    let inputText = document.getElementById('input')

    if (quote1.textContent == inputText.value) {
        console.log('ho gyi match')
        clearInterval(secmin)
        clearInterval(milisecond)
    }

    secmin = setInterval(secMin, 1000)
    milisecond = setInterval(milisecond, 10)


}






function milisecond() {
    var elapsedTime = Date.now() - startTime;
    let milisec = ((elapsedTime / 1000).toFixed(3).split(".")[1])

    document.getElementById("milisecond").innerHTML = milisec;
};

function secMin() {
    sec++
    if (sec > 59) {
        sec = 0;
        min++
    }
    document.getElementById('second').textContent = sec;
    document.getElementById('minut').textContent = min;
}