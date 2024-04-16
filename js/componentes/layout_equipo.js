// equipo
export let equipo = document.createElement("section");
equipo.innerHTML =
'<section class="usuarios">'+
        '<div class="padre1">'+
            '<div class="equipo1">'+
                '<h2>Name</h2>'+
            '</div>'+
            '<div class="estados">'+
                '<h2>Status</h2>'+
            '</div>'+
            '<div class="e-mail">'+
                '<h2>Email</h2>'+
            '</div>'+
        '</div>'+
        '<div class="padre2">'+
            '<div class="equipo">'+
                '<img src="./img/Afterclap-8.png" alt="" class="pic">'+
                '<div class="cont">'+
                    '<b>Anna Adison</b>'+
                    '<span>@anna0</span>'+
                '</div>'+

           '</div>'+
            '<div class="status">'+
                '<div class="estado">'+
                    '<div class="punto"></div>'+
                    '<span class="estado2">Active</span>'+
                '</div>'+
            '</div>'+
            '<div class="correo">'+
                '<span class="correo2">anna.addison@yahoo.com</span>'+
            '</div>'+
        '</div>'+
        '<div class="padre3">'+
            '<div class="equipo">'+
                '<img src="./img/Afterclap-1.png" alt="" class="pic">'+
                '<div class="cont">'+
                    '<b>Carol Campbell</b>'+
                    '<span>@carol1</span>'+
                '</div>'+

            '</div>'+
            '<div class="status">'+
                '<div class="estado">'+
                    '<div class="punto"></div>'+
                    '<span class="estado2">Active</span>'+
                '</div>'+
            '</div>'+
            '<div class="correo">'+
                '<span class="correo2">carol.campbell@aol.com</span>'+
            '</div>'+
        '</div>'+
        '<div class="padre2">'+
            '<div class="equipo">'+
                '<img src="./img/Afterclap-5.png" alt="" class="pic">'+
                '<div class="cont">'+
                    '<b>Julia Jones</b>'+
                    '<span>@julia2</span>'+
                '</div>'+

            '</div>'+
            '<div class="status">'+
                '<div class="estado">'+
                    '<div class="punto"></div>'+
                    '<span class="estado2">Active</span>'+
                '</div>'+
            '</div>'+
            '<div class="correo">'+
                '<span class="correo2">jolie.jones@msn.com</span>'+
            '</div>'+
        '</div>'+
        '<div class="padre3">'+
            '<div class="equipo">'+
                '<img src="./img/Afterclap-6.png" alt="" class="pic">'+
                '<div class="cont">'+
                    '<b>Irene Everly</b>'+
                    '<span>@irene3</span>'+
                '</div>'+

            '</div>'+
            '<div class="status">'+
                '<div class="estado">'+
                    '<div class="punto"></div>'+
                    '<span class="estado2">Active</span>'+
                '</div>'+
            '</div>'+
            '<div class="correo">'+
                '<span class="correo2">irene.everly@gmail.com</span>'+
            '</div>'+
        '</div>'+
        '<div class="padre2">'+
            '<div class="equipo">'+
                '<img src="./img/Afterclap-7.png" alt="" class="pic">'+
                '<div class="cont">'+
                    '<b>Rachel Rose</b>'+
                    '<span>@rachel4</span>'+
                '</div>'+

            '</div>'+
            '<div class="status">'+
                '<div class="estado">'+
                    '<div class="punto"></div>'+
                    '<span class="estado2">Active</span>'+
                '</div>'+
            '</div>'+
            '<div class="correo">'+
                '<span class="correo2">rachel.rose@hotmail.com</span>'+
            '</div>'+
        '</div>'+
        '<div class="padre3">'+
            '<div class="equipo">'+
                '<img src="./img/Afterclap-9.png" alt="" class="pic">'+
                '<div class="cont">'+
                    '<b>Sophie Sutton</b>'+
                    '<span>@sophie5</span>'+
                '</div>'+

            '</div>'+
            '<div class="status">'+
                '<div class="estado">'+
                    '<div class="punto"></div>'+
                    '<span class="estado2">Active</span>'+
                '</div>'+
            '</div>'+
            '<div class="correo">'+
                '<span class="correo2">sophie.sutton@yahoo.com</span>'+
            '</div>'+
        '</div>'+
        '<div class="padre2">'+
            '<div class="equipo">'+
                '<img src="./img/Afterclap-3.png" alt="" class="pic">'+
                '<div class="cont">'+
                    '<b>Wendy West</b>'+
                    '<span>@wendy6</span>'+
                '</div>'+

            '</div>'+
            '<div class="status">'+
                '<div class="estado">'+
                    '<div class="punto"></div>'+
                    '<span class="estado2">Active</span>'+
                '</div>'+
            '</div>'+
            '<div class="correo">'+
                '<span class="correo2">wendy.west@gmail.com</span>'+
            '</div>'+
        '</div>'+
    '</section>';

    export function crearEquipo(){

        // ELEMENTOS DEL DOM
        let div_equipo = document.querySelector("#equipo");
    
    
        // INSERTAR FORMULARIO EN EL DOM
        div_equipo.appendChild(equipo);
    
    }