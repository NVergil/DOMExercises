import hamburgerMenu from "./hamburgerMenu.js";
import { relojDigital, alarm } from "./clockAlarm.js";
import { moveBall, shortcutsKeyboard } from "./keyboardEvents.js";
import countdown from "./cuentaRegresiva.js";
import btnScroll from "./btnScroll.js";
import themeButton from "./themeBtn.js";

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
    themeButton('.theme-Btn', '.body');
})

d.addEventListener('keydown', e=>{
  shortcutsKeyboard(e);
  moveBall(e,'.ball','.stage');
})