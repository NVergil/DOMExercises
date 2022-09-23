
// export const relojDigital = function(){
//   // mi codigo para inicairlo:
//   // const d = document;
//   // let reloj = new Date();
//   // let hour = reloj.getHours();
//   // let minutes = reloj.getMinutes();
//   // let seconds = reloj.getSeconds();
//   // hour = (hour < 10) ? '0'+hour : hour;
//   // minutes = (minutes < 10) ? '0'+minutes : minutes;
//   // seconds = (seconds < 10) ? '0'+seconds : seconds;
//   // let horaCompleta = `${hour}:${minutes}:${seconds}`
//   // let divReloj = d.getElementById('reloj');
//   // divReloj.innerText = horaCompleta;
//   // divReloj.textContent = horaCompleta;
//   // setTimeout(relojDigital, 1000);

// }
const d = document;

export const relojDigital = function(clock, btnPlay, btnStop){
  let clockTempo;
  const $h3 = d.createElement('h3');
  const $divClock = d.querySelector(clock);
  d.addEventListener('click', e=>{
    if(e.target.matches(btnPlay)){
      clockTempo = setInterval(()=>{
        let clockHour = new Date().toLocaleTimeString();
        $h3.innerText = clockHour;
        $divClock.appendChild($h3);
      }, 1000);
      e.target.disabled = true;
    }
    if(e.target.matches(btnStop)){
      clearInterval(clockTempo);
      $h3.innerText = null;
      $divClock.removeChild($h3);
      d.querySelector(btnPlay).disabled = false;
    }
  })
}

export const alarm = function(clock, btnPlay, btnStop, src){
  const $alarma = d.querySelector(clock)
  let $audio; 
  d.addEventListener('click', e=>{
    if(e.target.matches(btnPlay)){
      $audio = d.createElement('audio');
      $audio.setAttribute('src', src);
      $alarma.appendChild($audio);
      $audio.play();
    }
    if(e.target.matches(btnStop)){
      setTimeout(() => {
        $alarma.removeChild($audio);
      }, 500);
    }
  })
}