// l main

export let main = document.createElement("section");
main.innerHTML =
'<main>'+
'<div class="userpic">'+
    '<img id="pic">'+
    '<h1 id="usuario"></h1>'+'<br>'+
'</div>'+
'<div class="info">'+
    '<div>'+
        '<h2>ID</h2>'+
        '<span id="id"></span>'+
    '</div>'+
    '<div>'+
        '<h2>Nickname</h2>'+
        '<span id="name"></span>'+
    '</div>'+
    '<div>'+
        '<h2>Username</h2>'+
        '<span id="userN"></span>'+
    '</div>'+
    '<div>'+
        '<h2>Address</h2>'+
        '<span id="address"></span>'+
    '</div>'+
    '<div>'+
        '<h2>Email</h2>'+
        '<span id="email"></span>'+
    '</div>'+
    '<div>'+
        '<h2>Phone</h2>'+
        '<span id="phone"></span>'+
    '</div>'+
'</div>'+
'</main>';
export function crearMain(){

    // ELEMENTOS DEL DOM
    let div_main = document.querySelector("#main");


    // INSERTAR FORMULARIO EN EL DOM
    div_main.appendChild(main);

}