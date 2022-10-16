const d=document;

let x = 0,
    y = 0;

export const moveBall = function(e, ball, stage) {
  const $ball = d.querySelector(ball),
  $stage = d.querySelector(stage),
  limitsBall = $ball.getBoundingClientRect(),
  limitsStage = $stage.getBoundingClientRect()
  // console.log(e.keyCode);
  // console.log(limitsBall, limitsStage);

switch (e.keyCode) {
  case 37: // Left
  if(limitsBall.left > limitsStage.left){
    e.preventDefault(); // esto es para que no se mueva la barra de scroll con las teclas flecha
    x--;
  }
  break;
  case 38: // Up
  if(limitsBall.top > limitsStage.top){
    e.preventDefault();
    y--;
  }
  break;
  case 39: // Right
  if(limitsBall.right < limitsStage.right){
    e.preventDefault();
    x++;
  }
  break;
  case 40: // Down
  if(limitsBall.bottom < limitsStage.bottom){
    e.preventDefault();
    y++;
  }
  break;
}
$ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

export const shortcutsKeyboard = function(e){
  // console.log(e.type);
  // console.log(e.key);;
  // console.log(e.keyCode);
  // console.log(e.ctrlKey);
  // console.log(e.altKey);
  // console.log(e);

  if (e.key === 'a' && e.altKey) {
    alert('Haz lanzado una alerta mamalona con el keyboard');
  }
  if (e.key === 'c' && e.altKey) {
    confirm('Confirmas que lanzaste una alarta mamalona?');
  }
  if (e.key === 'p' && e.altKey) {
    prompt('Escribe algo mamalon aqui dentro');
  }
}
