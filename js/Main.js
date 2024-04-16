// main
import {crearLogin} from './programas/login.js';
import {crearMenu} from './componentes/layout_menu.js';
import {crearHeader} from './componentes/header.js';
import {crearMain} from './componentes/loyaut_main.js';
import {crearEquipo} from './componentes/layout_equipo.js';
import {crearMarcas} from './componentes/layout_marcas.js';
import {crearPedidos} from './componentes/layout_pedidos.js';
import {crearProductos} from './componentes/layout_productos.js';
import {crearCarrito} from './componentes/layout_carrito.js';
import {crearFooter} from './componentes/layout_footer.js';

crearLogin();
crearMenu();
crearHeader();
crearMain();
crearEquipo();
crearMarcas();
crearPedidos();
crearProductos();
crearCarrito();
crearFooter();

import {login} from './programas/login.js';


/** 
    RECUPERACIÓN DE DATOS
    la función @recuperar_datos tiene las sigueintes funciones:
    - Evitar que la página se recargue con preventDefault
    - Recuperar el usuario ingresado en el input @username
    - Recuperar la contraseña del input @password
    - Ejecutar la función @login agregando como parámetros los datos
      recuperados.
    - La función es activada por el boton del formulario @login por
      medio de un evento de tipo submit.
*/
function recuperar_datos(e) {
    e.preventDefault(); //<-- Evita que el formulario se recargue

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    //Programa login
    login(username,password);
}

// Acción del boton
var bt_entrar = document.querySelector("#login");//<-- Instancia del formulario
bt_entrar.addEventListener('submit',recuperar_datos); //<-- Evento