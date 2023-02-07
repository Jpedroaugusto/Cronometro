import "./styles.scss";
const stopwatch: HTMLElement | null = document.getElementById('stopwatch');

const startButton: HTMLElement | null = document.getElementById('start-btn');
const pauseButton: HTMLElement | null = document.getElementById('pause-btn');
const resetButton: HTMLElement | null = document.getElementById('reset-btn');

let milesegundos: number;
let segundos: number;
let minutos: number;
let horas: number;

let interval: number;

window.addEventListener('load',() => {
  resetStopwatch()
});


function resetStopwatch() : void {
  milesegundos = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;

  showStopwatch(horas,minutos,segundos,milesegundos);
}

if(startButton != null) {
  startButton.addEventListener('click',() => {
    clearInterval(interval);

    interval = setInterval(() => {
      milesegundos++;
  
      if(milesegundos > 100) {
        milesegundos = 0;
        segundos++;
      }

      if(segundos > 60) {
        segundos = 0;
        minutos++;
      }

      if(minutos > 60) {
        minutos = 0;
        horas++;
      }

      showStopwatch(horas,minutos,segundos,milesegundos);
    }, 10)
  });
}

if(pauseButton != null) {
  pauseButton.addEventListener('click', () => {
    clearInterval(interval);
  })
}

if(resetButton != null) {
  resetButton.addEventListener('click', () => {
    clearInterval(interval);
    resetStopwatch()
  });
}

function showStopwatch(horas:number, minutos: number, segundos: number, milesegundos: number) : void {
  if(stopwatch != null) {
    stopwatch.innerHTML = `${
        horas <= 9 ? '0'+horas : horas
        }:${
          minutos <= 9 ? '0'+minutos : minutos
        }:${
          segundos <= 9 ? '0'+segundos : segundos
        }:${
          milesegundos <= 9 ? '0'+milesegundos : milesegundos
    }`;
  }
}