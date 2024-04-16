// administrador
import {footer, section_administrador, section_body, section_login} from './login.js';

export function adminstrador(){
    section_administrador.classList.remove("activar-block");
    section_login.classList.remove("activar-flex");
    section_body.classList.remove("body");
    footer.classList.remove("footer1");
  }

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('login');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  }); 