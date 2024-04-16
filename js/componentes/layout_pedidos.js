// l pedidos
export let pedidos = document.createElement("div");
pedidos.innerHTML =
'<section class="section-pedidos">'+
        '<h2>Pedidos</h2>'+
        '<div class="contenido">'+
            '<div class="info-pedido">'+
                '<h2 id="usuario2"></h2>'+
                '<span id="dir"></span>'+
                '<span id="ord"></span>'+
                '<span id="entrega"></span>'+
            '</div>'+

            '<div class="info-pedido2">'+
                '<h3>Cantidad</h3>'+
                '<span id="cant"></span>'+
            '</div>'+

           '<div class="info-pedido3">'+
                '<span id="envio"><b></span>'+
                '<span id="impuesto"></span>'+
                '<div class="barra"></div>'+
                '<span id="total"></span>'+
           '</div>'+
        '</div>'+
    '</section>';

    export function crearPedidos(){

        // ELEMENTOS DEL DOM
        let div_pedidos = document.querySelector("#pedidos");
    
    
        // INSERTAR FORMULARIO EN EL DOM
        div_pedidos.appendChild(pedidos);
    
    }