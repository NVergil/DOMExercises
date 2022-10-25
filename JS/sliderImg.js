const d = document;

const slider = ()=> {
  const $nextBtn = d.querySelector('.slider-btns .next'),
        $prevBtn = d.querySelector('.slider-btns .prev'),
        $slides = d.querySelectorAll('.slider-slide');
let i = 0;
  d.addEventListener('click', e => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $slides[i].classList.remove('active');
      i--;
  
      if(i < 0) {
        i = $slides.length - 1;
      }

      $slides[i].classList.add('active');
    }
    if (e.target === $prevBtn) {}
  })
}

export default slider;