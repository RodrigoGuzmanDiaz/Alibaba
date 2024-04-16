// l menu
export let menu = document.createElement("div");
menu.innerHTML =
    '<div class="menu__side" id="menu_side">'+

    '<div class="name__page">'+
        '<i class="fa-solid fa-user"></i>'+
        '<h4 id="profile"></h4>'+
    '</div>'+

    '<div class="options__menu">'+	

        '<a href="#" class="selected" id="selected">'+
            '<div class="option">'+
                '<i class="fas fa-home" title="Inicio"></i>'+
                '<h4>Inicio</h4>'+
            '</div>'+
        '</a>'+

        '<a href="#" id="trabajadores">'+
            '<div class="option">'+
                '<i class="fa-solid fa-users" title"Equipo"></i>'+
                '<h4>Equipo</h4>'+
            '</div>'+
        '</a>'+

        '<a href="#" id="ped">'+
            '<div class="option">'+
                '<i class="far fa-file" title="Pedidos"></i>'+
                '<h4>Pedidos</h4>'+
            '</div>'+
        '</a>'+
        
        '<a href="#" id="pro">'+
            '<div class="option">'+
                '<i class="fa-solid fa-tags" title="Productos"></i>'+
                '<h4>Productos</h4>'+
            '</div>'+
        '</a>'+

        '<a href="#"  id="marcas3">'+
            '<div class="option">'+
                '<i class="fa-solid fa-money-check-dollar" title="Vendedor"></i>'+
                '<h4>Vendedor</h4>'+
            '</div>'+
        '</a>'+

        '<a href="#" id="car">'+
            '<div class="option">'+
                '<i class="fa-solid fa-cart-shopping" title="Shoppingcart"></i>'+
                '<h4>Shoppingcart</h4>'+
            '</div>'+
        '</a>'+

        '<a href="#" id="salir">'+
            '<div class="option">'+
                '<i class="fa-solid fa-arrow-right-from-bracket" title="Salir"></i>'+
                '<h4>Salir</h4>'+
            '</div>'+
        '</a>'+

    '</div>'+

    '</div>';

export function crearMenu(){

    // ELEMENTOS DEL DOM
    let div_menu = document.querySelector("#menu");


    // INSERTAR FORMULARIO EN EL DOM
    div_menu.appendChild(menu);

}