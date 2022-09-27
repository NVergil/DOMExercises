const d = document;
const countdown = (id, limitDate, finalMessage)=> {
  const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = ('0' + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
        minutes = ('0' + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
        seconds = ('0' + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

    $countdown.innerHTML = `
    <div class="countdown-container">
      <div class="timeCount">
       ${days}
      </div>
      <div class="paraCount">
        Days
      </div>
    </div>
    <div class="countdown-container">
      <div class="timeCount">
       ${hours}
      </div>
      <div class="paraCount">
        Hours
      </div>
    </div>
    <div class="countdown-container">
      <div class="timeCount">
       ${minutes}
      </div>
      <div class="paraCount">
        Minutes
      </div>
    </div>
    <div class="countdown-container">
      <div class="timeCount">
       ${seconds}
      </div>
      <div class="paraCount">
        Seconds
      </div>
    </div>
    `;

    if(limitTime < 0){
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}

export default countdown;