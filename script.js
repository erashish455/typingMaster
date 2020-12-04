var sec = 0;
var min = 0;
var startTime = Date.now();
var quote1 = document.querySelector('.quote')
var quoteArray = quote1.textContent.split('')
let secmin, milisecond1, quote, inputText, a;
var running = false


function matching() { // this function match the total text input with the quote and timer invokes in this function
    inputText = document.getElementById('input')
    a = (inputText.value.length)
    console.log(a)

    if (inputText.value == 0 && !running) {
        milisecond1 = setInterval(milisecond, 10)
        secmin = setInterval(secMin, 1000)
        running = true

    } else {
        if (quote1.textContent == inputText.value) {
            clearInterval(secmin)
            clearInterval(milisecond1)
            wordCount()
        }

    }
}

function colourChange() { // this function changes the colour when we enter =right and wrong letter and shake function is also called in this function.
    let ab = quote1.textContent.slice(0, a + 1);
    let ac = inputText.value

    if (ab == ac) {
        console.log('ho gya hai ab ky a')
        document.getElementById('input').style['border'] = "20px solid #12d237";
    } else {
        document.getElementById('input').style['border'] = "20px solid #fd0000";
        document.getElementById('input').classList.add('shake')
        setTimeout(removeShake, 2000)
    }
}
// this function count millisecond and show to the html page
function milisecond() {
    var elapsedTime = Date.now() - startTime;
    let milisec = ((elapsedTime / 1000).toFixed(2).split(".")[1])

    document.getElementById("milisecond").innerHTML = milisec;
};
// this function count the minuts and seconds value and show to the html page
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

// this function helps to calculate the WPM result and generate alert in the browser

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
// this function reset the value of everything
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
    running = false
    document.getElementById('input').style['border'] = "14px solid gray"
}
// this function remove the shake functionality
function removeShake() {
    document.getElementById('input').classList.remove('shake')
}
document.getElementById("input").addEventListener('keypress', matching)
document.getElementById("input").addEventListener('keyup', colourChange)