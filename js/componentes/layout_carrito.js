// carrito

export let carrito = document.createElement("div");
carrito.innerHTML =
'<section class="carrito">'+
        '<h2>Carritos de Compra</h2>'+
        '<div class="section-carrito">'+
            '<div>'+
                '<i class="fa-solid fa-cart-shopping" title="Shoppingcart"></i>'+
                '<h3>3000</h3>'+
                '<span><b>Estado: </b>En progreso</span>'+  
            '</div>'+
            '<div>'+
                '<i class="fa-solid fa-cart-shopping" title="Shoppingcart"></i>'+
                '<h3>3100</h3>'+  
                '<span><b>Estado: </b>En progreso</span>'+  
            '</div>'+
            '<div>'+
                '<i class="fa-solid fa-cart-shopping" title="Shoppingcart"></i>'+
                '<h3>3200</h3>'+
                '<span><b>Estado: </b>En progreso</span>'+  
            '</div>'+
            '<div>'+
                '<i class="fa-solid fa-cart-shopping" title="Shoppingcart"></i>'+
                '<h3>3300</h3>'+    
                '<span><b>Estado: </b>En progreso</span>'+
            '</div>'+
            '<div>'+
                '<i class="fa-solid fa-cart-shopping" title="Shoppingcart"></i>'+
                '<h3>3400</h3>'+
                '<span><b>Estado: </b>En progreso</span>'+
            '</div>'+
            '<div>'+
                '<i class="fa-solid fa-cart-shopping" title="Shoppingcart"></i>'+
                '<h3>3500</h3>'+
                '<span><b>Estado: </b>En progreso:</span>'+ 
            '</div>'+
            '<div>'+
                '<i class="fa-solid fa-cart-shopping" title="Shoppingcart"></i>'+
                '<h3>3600</h3>'+
                '<span><b>Estado: </b>En progreso</span>'+ 
            '</div>'+
        '</div>'+
    '</section>';

    export function crearCarrito(){

        // ELEMENTOS DEL DOM
        let div_carrito = document.querySelector("#carrito");
    
    
        // INSERTAR FORMULARIO EN EL DOM
        div_carrito.appendChild(carrito);
    
    }