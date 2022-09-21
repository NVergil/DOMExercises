const hamburgerMenu = function(panelBtn, panel, menuLinks) {
  const d=document;

  d.addEventListener('click', e =>{
    if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle('is-active');
      d.querySelector(panelBtn).classList.toggle('is-active');
    }
    if(e.target.matches(menuLinks)) {
      d.querySelector(panel).classList.remove('is-active');
      d.querySelector(panelBtn).classList.remove('is-active');
    }
  })
}

export default hamburgerMenu;