const d = document,
n = navigator,
ua = n.userAgent;

const userDeviceInfo = (id)=> {
  const $id = d.getElementById(id),
  isMobile = {
    android: ()=> ua.match(/android/i),
    ios: ()=> ua.match(/iphone|ipad|ipod/i),
    windows: ()=> ua.match(/windows phone/i),
    any: function() {
      return this.android() || this.ios() || this.windows();
    }
  },
  isDesktop = {
    linux: ()=> ua.match(/linux/i),
    mac: ()=> ua.match(/mac os/i),
    windows: ()=> ua.match(/windows nt/i),
    any: function() {
      return this.linux() || this.mac() || this.windows();
    }
  },
  isBrowser = {
    chrome: ()=> ua.match(/chrome/i),
    safari: ()=> ua.match((/safari/i)),
    firefox: ()=> ua.match(/firefox/i),
    opera: ()=> ua.match(/opr|opera mini|opx/i),
    ie: ()=> ua.match(/msie|iemobile/i),
    edge: ()=> ua.match(/edg|edge/i),
    any: function() {
      return (
        this.opera() ||
        this.edge() ||
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.ie()
      );
    }
  };
  const newUl = d.createElement('ul');
  const newLi = d.createElement('li');
  const newLi2 = d.createElement('li');
  const newLi3 = d.createElement('li');
  const bold = d.createElement('b');
  const bold2 = d.createElement('b');
  const bold3 = d.createElement('b');
  const newTextContent1 = d.createTextNode('User Agent: ');
  const newTextContent2 = d.createTextNode('Plataforma: ');
  const newTextContent3 = d.createTextNode('Navegador: ');
  const newTextContent_1 = d.createTextNode(`${ua}`);
  const newTextContent_2 = d.createTextNode(`${isMobile.any()||isDesktop.any()}`);
  const newTextContent_3 = d.createTextNode(`${isBrowser.any()}`);
  bold.appendChild(newTextContent_1);
  bold2.appendChild(newTextContent_2);
  bold3.appendChild(newTextContent_3);
  newLi.appendChild(newTextContent1);
  newLi2.appendChild(newTextContent2);
  newLi3.appendChild(newTextContent3);
  newLi.appendChild(bold);
  newLi2.appendChild(bold2);
  newLi3.appendChild(bold3);
  newUl.appendChild(newLi);
  newUl.appendChild(newLi2);
  newUl.appendChild(newLi3);
  $id.appendChild(newUl);
  newUl.classList.add('ulSection_6');
}

export default userDeviceInfo;