const d = document;

const themeButton = function(btnTheme, bodyTheme){
  const lightMode = ()=> {
    $bodyTheme.classList.remove('darkTheme');
    localStorage.setItem('theme', 'light')
  }

  const darkMode = ()=> {
    $bodyTheme.classList.add('darkTheme');
    localStorage.setItem('theme', 'dark')
  }
  
  let $bodyTheme = d.querySelector(bodyTheme);
  d.addEventListener('click', e=>{
    if (e.target.matches(btnTheme) || e.target.matches(`${btnTheme} *`)) {
      if($bodyTheme.classList == 'body') {
        darkMode();
      } else {
        lightMode();
      }
    } 
  })
  d.addEventListener('DOMContentLoaded', e=>{
    if (localStorage.getItem('theme') === null) localStorage.setItem('theme', 'light');
    if (localStorage.getItem('theme') === 'light') lightMode();
    if (localStorage.getItem('theme') === 'dark') darkMode();

    // alert('hola desde la function buttonTheme');
  })
}

export default themeButton;