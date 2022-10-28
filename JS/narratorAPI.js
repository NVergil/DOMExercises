const d = document,
w = window;

const speechReader = ()=> {
  const $speechSelect = d.getElementById('speech-select'),
  $speechTextarea = d.getElementById('speech-text'),
  $speechBtn = d.getElementById('speech-button'),
  speechMessage = new SpeechSynthesisUtterance();

  let voices = [];
  d.addEventListener("DOMContentLoaded", e=> {
    // console.log(w.speechSynthesis.getVoices());
    // Nos podemos ahorrar la w, solo la puse por cuestión informativa;

    speechSynthesis.addEventListener("voiceschanged", e => {
      // console.log(e);
      voices = speechSynthesis.getVoices();
      // console.log(voices);

      voices.forEach(voice => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} - ${voice.lang}`

        $speechSelect.appendChild($option);
      })
    })

  })
  d.addEventListener("change", e=> {
    if(e.target === $speechSelect) {
      speechMessage.voice = voices.find(voice => voice.name === e.target.value);
    }
    // console.log(speechMessage);
  })
  d.addEventListener("click", e=> {
    if(e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      speechSynthesis.speak(speechMessage);
    }
  })
}

export default speechReader;
