let minutes = 25;
let seconds = 0;
let pomodoro;
let pomodoroCount = 0;
let auxMinutes = minutes;
let auxSeconds = seconds;
displayRefresh();

document.getElementById("btnSession").addEventListener("click", function () {
  document.getElementById("minuteSession").value = minutes;
  document.getElementById("secodsSession").value = seconds;

  document.getElementById("myModal").style.display = "block";
});

document.getElementById("btnBreak").addEventListener("click", function () {
  document.getElementById("minuteSession").value = minutes;
  document.getElementById("secodsSession").value = seconds;

  document.getElementById("myModal").style.display = "block";
});

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });

document.getElementById("submitModal").addEventListener("click", function () {
  let minuteSession = parseInt(
    document.getElementById("minuteSession").value,
    10
  );
  let secodsSession = parseInt(
    document.getElementById("secodsSession").value,
    10
  );

  if (!isNaN(minuteSession) && !isNaN(secodsSession)) {
    document.getElementById("myModal").style.display = "none";
    minutes = minuteSession;
    seconds = secodsSession;
    auxMinutes = minutes;
    auxSeconds = seconds;
    displayRefresh();
  } else {
    alert("Please enter valid values for minutes and seconds.");
  }
});

function btnStart() {
  displayRefresh();

  pomodoro = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      pomodoroCount++;
      clearInterval(pomodoro);
      reset();
    } else if (seconds === 0) {
      seconds = 59;
      minutes--;
    } else {
      seconds--;
    }
    displayRefresh();
  }, 1000);
}

function btnPause() {
  clearInterval(pomodoro);
}

function btnReset() {
  reset();
}

function reset() {
  clearInterval(pomodoro);
  minutes = auxMinutes;
  seconds = auxSeconds;
  displayRefresh();
}

function displayRefresh() {
  const minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
  const secondsDisplay = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("minutes").textContent = minutesDisplay;
  document.getElementById("seconds").textContent = secondsDisplay;
  document.getElementById(
    "pomodoroCount"
  ).textContent = `Completed Pomodoros: ${pomodoroCount}`;
}
