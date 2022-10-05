const d = document;
const btnScroll = function(btnScroll) {
  let btnSc = d.querySelector(btnScroll);
  window.addEventListener("scroll", e=>{
    let scroll = window.scrollY;
    if (scroll > 300) {
      btnSc.classList.add('is-active');
    }
    if (scroll < 300) {
      btnSc.classList.remove('is-active')
    }
    /* Otros métodos para detectar el scroll de la pantalla */
    // console.log(window.pageYOffset, d.documentElement.scrollTop); 
  })
}
export default btnScroll;
