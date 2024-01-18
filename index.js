let minutes = 0;
let seconds = 5;
let pomodoro;
let pomodoroCount = 0;



function btnStart(){
    
    pomodoro = setInterval(()=>{
        if(minutes === 0 && seconds === 0){
            pomodoroCount++;
            clearInterval(pomodoro);
        }else if(seconds === 0){
            seconds = 60;
            minutes--;
        }
        seconds--;
        displayRefresh();
        
    }, 1000);
;
}

function btnPause(){
    clearInterval(pomodoro);
}

function displayRefresh(){
    const minutesDisplay = minutes < 10 ? '0' + minutes : minutes;
    const secondsDisplay = seconds < 10 ? '0' + seconds : seconds;


    document.getElementById('minutes').textContent = minutesDisplay;
    document.getElementById('seconds').textContent = secondsDisplay;
    document.getElementById('pomodoroCount').textContent =`Completed Pomodoros: ${pomodoroCount}`;


}