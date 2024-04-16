// footer
export let footer = document.createElement("div");
footer.innerHTML =
'<footer class="foot">'+
'<div>'+
    '<h2>Servicio al Cliente</h2>'+
    '<span>Centro de Ayuda</span>'+
    '<span>Reportar Abuso</span>'+
    '<span>Enviar una Disputa</span>'+
    '<span>Políticas y Reglas</span>'+
    '<span>Gana Dinero por tu Comentario</span>'+
'</div>'+
'<div>'+
    '<h2>Sobre Nosotros</h2>'+
    '<span>Acerca de Alibaba.com</span>'+
    '<span>Acerca del Grupo Alibaba</span>'+
    '<span>Mapa del Sitio</span>'+
    '<span>Blog de Alibaba.com</span>'+
'</div>'+
'<div>'+
    '<h2>Vender en Alibaba.com</h2>'+
    '<span>membresías de Proveedores</span>'+
    '<span>Centro de Aprendizaje</span>'+
    '<span>Programa de Socios</span>'+
'</div>'+
'</footer>';

export function crearFooter(){

    // ELEMENTOS DEL DOM
    let div_footer = document.querySelector("#footer");


    // INSERTAR FORMULARIO EN EL DOM
    div_footer.appendChild(footer);

}