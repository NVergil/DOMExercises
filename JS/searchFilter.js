import { robots } from "./robotsAPIData.js";

const d = document;

export const roboCardsCreator = (cardsContainer)=> {
  const roboContainer = d.querySelector(cardsContainer);
  robots.forEach((el)=>{
    let $card = document.createElement('div'),
        $roboImg = d.createElement('img'),
        $namesDiv = d.createElement('div'),
        $nameHeader = d.createElement('h2'),
        $names = d.createTextNode(el.username);
        $nameHeader.appendChild($names);
        $namesDiv.appendChild($nameHeader);
        $roboImg.src = `https://robohash.org/${el.id}/?set=set3`;
        $card.appendChild($roboImg);
        $card.appendChild($namesDiv);
    // console.log($nameHeader);
    roboContainer.appendChild($card);
    $card.classList.add('cards');
  });  
}

export const searchFilter = (input, roboCards)=> {
  d.addEventListener('input', e => {
    if(e.target.matches(input)) {
      d.querySelectorAll(roboCards)
      .forEach(el => el.textContent
      .toLowerCase()
      .includes(e.target.value)?
      el.classList.remove('filter'): 
      el.classList.add('filter'))
      // console.log(e.target.value)
    }
  })
}
