const d = document;
const w = window;

const smartVideo = ()=> {
  const $videos = d.querySelectorAll('video[data-smart-video]');
  
  const cb = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.play();
        entry.target.classList.add('active');
        entry.target.classList.add('animate__backInLeft');
      } 
      if(!entry.isIntersecting) {
        entry.target.pause();
        // entry.target.classList.remove('active');
        // entry.target.classList.remove('animate__backInLeft');
      }
      
      w.addEventListener("visibilitychange", e => 
      d.visibilityState === "visible" 
      ? entry.target.play() 
      : entry.target.pause()
      )
    });
  }
  
  const observer = new IntersectionObserver(cb, {threshold: 0.5});
  
  $videos.forEach(el => observer.observe(el));
}

export default smartVideo;