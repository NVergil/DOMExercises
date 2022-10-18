const d = document,
n = navigator;

const webCam = (id, playButton)=> {
  const $video = d.getElementById(id);
  const $playButton = d.querySelector(playButton);
  d.addEventListener('click', e=> {
    if (e.target.matches(playButton)) {
      if(n.mediaDevices.getUserMedia) {
        n.mediaDevices
        .getUserMedia({video:true, audio:false})
        .then((stream)=>{
          console.log(stream)
          $video.srcObject = stream;
          $video.play();
          $playButton.disabled = true;
        })
        .catch((err)=> {
        $video.insertAdjacentHTML('beforebegin', `<p>Sucedió el siguiente error: ${err}</p>`);
        console.log(`Sucedió el siguiente error: ${err}`)
      });
      }
    }
})
  // console.log(n.mediaDevices.getUserMedia);
}

export default webCam;