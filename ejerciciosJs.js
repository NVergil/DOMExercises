const
$btnHamburger = document.getElementById('btn-hamburger'),
$sidePanel = document.getElementById('sidePanel');


//=====================================================
const sidepanel = function(){
  $sidePanel.classList.toggle('sidepanelOpen');
  $btnHamburger.classList.toggle('is-active');
}
//=====================================================

$btnHamburger.addEventListener('click', function(){
  sidepanel();
});
document.addEventListener('click', (e)=>{
  if (e.target.matches('#sidePanel a')){
    sidepanel();
  }
})