const d = document;

const themeButton = function(btnTheme, bodyTheme){
  let $bodyTheme = d.querySelector(bodyTheme);
  d.addEventListener('click', e=>{
    if (e.target.matches(btnTheme) || e.target.matches(`${btnTheme} *`)){
      //  console.log('21');
      $bodyTheme.classList.toggle('darkTheme');
    }
  })
}

export default themeButton;