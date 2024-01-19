let minutes = 0;
let seconds = 5;
let pomodoro;
let pomodoroCount = 0;

displayRefresh();

document.getElementById('btnSession').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
  });
  
  document.getElementById('submitModal').addEventListener('click', function() {
    let minuteSession = document.getElementById('minuteSession').value;
    let secodsSession = document.getElementById('secodsSession').value;
    console.log('Minutos:', minuteSession);
    console.log('Segundos:', secodsSession);

    document.getElementById('myModal').style.display = 'none';
    minutes = minuteSession;
    seconds = secodsSession;
    displayRefresh();

  });
  
  function btnStart(){
    displayRefresh();
    
    pomodoro = setInterval(()=>{
        if(minutes === 0 && seconds === 0){
            pomodoroCount++;
            clearInterval(pomodoro);
        }else if(seconds === 0){
            seconds = 59;
            minutes--;
        } else{
            seconds--;
        }
        displayRefresh();
        
    }, 1000);
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