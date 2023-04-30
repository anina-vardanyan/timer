let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timer = document.querySelector('.timerDisplay');
let int = 0;

document.querySelector('.start').addEventListener('click', ()=>{
    if(int!==0){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    
});

document.querySelector('.stop').addEventListener('click', (event)=>{
    clearInterval(int);
    console.log(timer.innerHTML)
    document.querySelector('.rezult').textContent+= `  ${timer.innerHTML}  `
});

document.querySelector('.reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timer.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}