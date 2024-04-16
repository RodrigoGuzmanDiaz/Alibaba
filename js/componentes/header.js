// header

export let header = document.createElement("div");
header.innerHTML =
'<header>'+
'<div class="icon__menu">'+
    '<i class="fas fa-bars" id="btn_open"></i>'+
'</div>'+
'</header>';

export function crearHeader(){

    // ELEMENTOS DEL DOM
    let div_header = document.querySelector("#header");


    // INSERTAR FORMULARIO EN EL DOM
    div_header.appendChild(header);

};