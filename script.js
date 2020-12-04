let right = 0;
let wrong = 0
var sec = 0;
var min = 0;
var startTime = Date.now();
var quote1 = document.querySelector('.quote')
let secmin, milisecond1, quote, quoteArray;

function matching() {
    let inputText = document.getElementById('input')
    if (inputText.value == 0) {
        milisecond1 = setInterval(milisecond, 10)
        secmin = setInterval(secMin, 1000)

    } else {
        if (quote1.textContent == inputText.value) {
            clearInterval(secmin)
            clearInterval(milisecond1)
            wordCount()
        }

    }
}

function milisecond() {
    var elapsedTime = Date.now() - startTime;
    let milisec = ((elapsedTime / 1000).toFixed(2).split(".")[1])

    document.getElementById("milisecond").innerHTML = milisec;
};

function secMin() {
    sec++
    if (sec <= 9) {
        sec = "0" + sec


    }

    if (sec > 59) {
        sec = 0;
        min++
        if (min <= 9) {
            min = '0' + min
            document.getElementById('minut').textContent = min;
        } else {
            document.getElementById('minut').textContent = min;

        }
    }
    document.getElementById('second').textContent = sec;

}

function wordCount() {
    let array = (quote1.textContent.split('')).length
    console.log(array)
    console.log(document.getElementById('minut').textContent)
    console.log(document.getElementById('second').textContent)
    let totaltime = parseFloat(document.getElementById('minut').textContent) + parseFloat(document.getElementById('second').textContent) / 60;
    console.log(totaltime)
    let WordPerMinut = Math.floor((array / 5) / (totaltime))
    console.log(WordPerMinut)
    alert('your word per minut is :' + WordPerMinut)
}

function reset() {
    let inputText = document.getElementById('input')
    inputText.value = null;
    document.getElementById('second').textContent = '00';
    document.getElementById('minut').textContent = '00';
    document.getElementById("milisecond").innerHTML = '00';
    sec = 0;
    min = 0;
    clearInterval(secmin)
    clearInterval(milisecond1)
}


document.getElementById("input").addEventListener('keypress', matching)