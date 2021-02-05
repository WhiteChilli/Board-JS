
// Today's date

let toDay = new Date()
let dd = toDay.getDate()
let mm = toDay.getMonth() + 1
let yy = toDay.getFullYear()

let date = dd + "-" + mm + "-" + yy ;    
document.getElementById('date').textContent = date;
    

// Current time

setInterval(myClock, 500);
function myClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    

    // hours = (hours > 12) ? hours - 12 : hours;

    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    
    document.getElementById('clock').innerHTML =
        hours + ":" + minutes;

    let greetingTime = document.getElementById('timeaday');

        if (hours >= 04 && hours < 12) {
            greetingTime.textContent = "Good Morning,";
        } else if (hours >= 12 && hours < 17) {
            greetingTime.textContent = "Good Afternoon,";
        } else if (hours >= 17 && hours < 23) {
            greetingTime.textContent = "Good Evening,";
        } else if (hours >= 00 && hours < 05) {
            greetingTime.textContent = "Goodnight,";
        } else {
            greetingTime.textContent = "Hi";
        }
    }


let quotes = [
    "I am enough" ,
    "I get better every single day",
    "All of my problems have solution",
    "I forgive myself for my mistakes",
    "My challenges help me grow",
    "My mistakes help me learn and grow",
    "I stand up for what I believe in",
    "I can get through everything",
    "I am capable of so much",
    "I believe in myself",
    "I deserve to be happy",
    "I am in charge of my life",
    "I have the power to make my dreams come true",
    "I am open and ready to learn",
    "I only compare myself to myself",
    "I can be anything I want to be",
    "I accept who I am"
]

let newQuote = document.getElementById('newquote');
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
newQuote.innerHTML = randomQuote;
    



