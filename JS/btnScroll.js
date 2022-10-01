
const btnScroll = function(btnScroll) {
  const d = document;
  let btnSc = d.querySelector(btnScroll);
  window.addEventListener("scroll", e=>{
    let scroll = window.scrollY;
    if (scroll > 470) {
      btnSc.classList.add('is-active');
    }
    if (scroll < 470) {
      btnSc.classList.remove('is-active')
    }
  })
}
export default btnScroll;