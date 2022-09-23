import hamburgerMenu from "./hamburgerMenu.js";
import { relojDigital, alarm } from "./clockAlarm.js";

const d = document;

d.addEventListener('DOMContentLoaded', e=>{
  hamburgerMenu('.panel-btn','.panel','.menu a');
  relojDigital('#reloj', '#activar-reloj', '#desactivar-reloj')
  alarm('#reloj', '#activar-alarma', '#desactivar-alarma', 'assets/SilentHillSiren.mp3');
})
