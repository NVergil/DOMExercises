const d = document,
nGeo = navigator.geolocation;

const getPosition = (id, actionButton)=> {
  const $div = d.getElementById(id),
  newUl = d.createElement('ul'),
  linkGMaps = d.createElement('a');
  d.addEventListener('click', e=> {
    if(e.target.matches(actionButton)) {
      nGeo.getCurrentPosition((position)=>{
         const pos = [
          d.createTextNode(`Latitud: ${position.coords.latitude}`),
          d.createTextNode(`Longitud: ${position.coords.longitude}`),
          d.createTextNode(`Precisión: ${Math.floor(position.coords.accuracy)} metros`),
         ];
         console.log(pos);
         pos.forEach((el)=>{
          let newLi = d.createElement('li');
          newLi.appendChild(el);
          newUl.appendChild(newLi);
         })
         newUl.classList.add('ulSection_9');
         $div.appendChild(newUl);
         linkGMaps.textContent = 'Abrir en Google Maps';
         linkGMaps.setAttribute('href', `https://www.google.com/maps/search/${position.coords.latitude},${position.coords.longitude}`);
         linkGMaps.setAttribute('target', '_blank');
         $div.appendChild(linkGMaps);
        //  d.querySelector(actionButton).disabled = true;
         d.querySelector(actionButton).remove();
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        // console.log(position.coords.accuracy);
      })
    }
  })
}

export default getPosition;

// navigator.geolocation.getCurrentPosition((position) => {
//   doSomething(position.coords.latitude, position.coords.longitude);
// });