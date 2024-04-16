// l marcas

export let marcas = document.createElement("section");
marcas.innerHTML =
'<section class="marcas-contenedor">'+
        '<div class="t-marcas">'+
            '<h2>Nuestras Marcas</h2>'+
        '</div>'+

        '<div class="marcas">'+
            '<div class="caja">'+
                '<div>'+
                    '<img src="https://www.pngmart.com/files/10/Apple-Logo-PNG-Photos.png" alt="" class="apple">'+
                '</div>'+
                '<div>'+
                    '<img src="https://soporteti.net/wp-content/uploads/2022/04/Microsoft-Logo-PNG.png" alt="" class="microsoft">'+
                '</div>'+
                '<div>'+
                    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1280px-Lenovo_logo_2015.svg.png" alt="" class="lenovo">'+
                '</div>'+
                '<div>'+
                    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1280px-ASUS_Logo.svg.png" alt="" class="asus">'+
                '</div>'+
            '</div>'+

            '<div class="caja">'+
                '<div>'+
                    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/799px-Dell_Logo.png" alt="" class="dell">'+
                '</div>'+
                '<div>'+
                    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Monoprice_logo_black.svg/1200px-Monoprice_logo_black.svg.png" alt=""  class="mono">'+
                '</div>'+
                '<div>'+
                    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png" alt=""  class="sony">'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</section>';

    export function crearMarcas(){

        // ELEMENTOS DEL DOM
        let div_marcas = document.querySelector("#marcas");
    
    
        // INSERTAR FORMULARIO EN EL DOM
        div_marcas.appendChild(marcas);
    
    };