const d = document;

export const lottery = (input, addButton, userList, guilterButton, selector)=> {
  const $input = d.querySelector(input),
  $ul = d.querySelector(userList),
  $guilterButton = d.querySelector(guilterButton);
  const createLiElement = ()=> {
        let $newLi = d.createElement('li'),
        userLi = d.createTextNode($input.value);
        $newLi.appendChild(userLi);
        $ul.appendChild($newLi);
        $input.value = null;
        $newLi.classList.add('users');
        $guilterButton.disabled = false;
  }
function buttonAdd(e) {
  if(e.target.matches(addButton) && $input.value.length > 0){
    createLiElement();
  } else {
  }
} 
function enterAdd(event) {
  if(event.code === "Enter" && $input.value.length > 0){
    createLiElement();
  }
}
  d.addEventListener('click', buttonAdd);
  d.addEventListener('keydown', enterAdd);

  const getGuilty = ()=>{
    if ($ul.hasChildNodes()) {
        const $players = d.querySelectorAll(selector)
        if ($players.length > 1) {
          const random = Math.floor(Math.random()*$players.length),
          guilter = $players[random];
          $ul.innerHTML = `El culpable es: ${guilter.textContent}`
          setTimeout(() => {
            $ul.innerHTML = '';
          }, 4000);
        } else {
          $ul.innerHTML = 'Agrega un mínimo de 2 participantes';
          setTimeout(() => {
            $ul.innerHTML = '';
          }, 4000);
            $guilterButton.disabled = true;
        }
    } else {
      $ul.innerHTML = 'Agrega un mínimo de 2 participantes';
          setTimeout(() => {
            $ul.innerHTML = '';
          }, 4000);
          $guilterButton.disabled = true;
    }
  }
  $guilterButton.addEventListener('click', getGuilty);
}
