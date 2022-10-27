import hamburgerMenu from "./hamburgerMenu.js";
import { relojDigital, alarm } from "./clockAlarm.js";
import { moveBall, shortcutsKeyboard } from "./keyboardEvents.js";
import countdown from "./cuentaRegresiva.js";
import btnScroll from "./btnScroll.js";
import themeButton from "./themeBtn.js";
import responsiveMedia from "./objResponsive.js";
import responsiveTester from "./responsiveTest.js";
import userDeviceInfo from "./userAgent.js";
import networkStatus from "./networkStatus.js";
import webCam from "./webcamDetection.js";
import getPosition from "./geolocationDetection.js";
import { roboCardsCreator, searchFilter } from "./searchFilter.js";
import { lottery } from "./lottery.js";
import slider from "./sliderImg.js";
import scrollSpy from "./scrollSpy.js";
import smartVideo from "./smartVideo.js";

const d = document;

d.addEventListener('DOMContentLoaded', e=>{
  hamburgerMenu('.panel-btn','.panel','.menu a');
  relojDigital('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('#reloj', '#activar-alarma', '#desactivar-alarma', 'assets/SilentHillSiren.mp3');
  countdown(
    'countdown', 
    'Jan, 2023 24:00:00', 
    'Feliz Año Nuevo! 🎆'
    );
  btnScroll('.btnTop');
  responsiveMedia('youtube', '(min-width:750px)', `<button class="btn-7_responsiveJS"><a href="https://youtu.be/MMvn-qquzKU" target="_blank" rel="noopener">Escucha este tema</a></button>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/MMvn-qquzKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia('gmaps', '(min-width:750px)', `<button class="btn-7_responsiveJS"><a href="https://goo.gl/maps/tmQxm9F8VcjeUb348" target="_blank" rel="noopener">Torre Latinoamericana</a></button>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.501782316848!2d-99.14283685126111!3d19.433920986819185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b5b005b95%3A0x4da8ca5798c532b7!2sTorre%20Latinoamericana%2C%20Eje%20Central%20L%C3%A1zaro%20C%C3%A1rdenas%202%2C%20Centro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Cuauht%C3%A9moc%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1665882651536!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
  responsiveTester('responsive-tester');
  userDeviceInfo('user-device');
  webCam('webcamContainer', '#activateWebCam');
  roboCardsCreator('.roboContainer');
  searchFilter('.cardFilter', '.cards');
  lottery('.participantsInput', '.addUser','.participantList', '.guiltyUser', '.users');
  slider();
  scrollSpy();
  smartVideo();
})
  
d.addEventListener('keydown', e=>{
  shortcutsKeyboard(e);
  moveBall(e,'.ball','.stage');
})

themeButton('.theme-Btn', '.body');
networkStatus();
getPosition('gl_position', '#getPosButton');
