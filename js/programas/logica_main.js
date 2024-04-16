// logica m
import {user} from '../Data/user.js';
import {orden} from '../Data/order.js';

let usuario = document.getElementById("usuario");
let id = document.getElementById("id");
let name = document.getElementById("name");
let userN = document.getElementById("userN");
let address = document.getElementById("address");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let profile = document.getElementById("profile");
let usuario2 = document.getElementById("usuario2");
let dir = document.getElementById("dir");
let ord = document.getElementById("ord");
let entrega = document.getElementById("entrega");
let cant = document.getElementById("cant");
let envio = document.getElementById("envio");
let impuesto = document.getElementById("impuesto");
let total = document.getElementById("total");

        function saludo(){
            var username = document.querySelector("#username").value;
            for(let i = 0; i<=7;i++){
                if(username == user[i][1]){
                    profile.innerHTML =  user[i][1];
                    usuario.innerHTML = 'Bienvenida ' + user[i][1];
                    id.innerHTML = user[i][0];
                    name.innerHTML = user[i][1];
                    userN.innerHTML = user[i][3];
                    address.innerHTML = user[i][4];
                    email.innerHTML = user[i][5];
                    phone.innerHTML = user[i][6];
                    usuario2.innerHTML = orden[i][7];
                    dir.innerHTML = '<b>' + 'Dirección: ' + '</b>' +orden[i][8];
                    ord.innerHTML = '<b>' + 'Fecha de Pedido: ' + '</b>' +orden[i][5];
                    entrega.innerHTML = '<b>' + 'Fecha de Entrega: ' + '</b>' +orden[i][6];
                    cant.innerHTML = orden[i][1];
                    envio.innerHTML = '<b>' + 'Costo de Envío: ' + '</b>' +orden[i][2];
                    impuesto.innerHTML = '<b>' + 'Impuesto: ' + '</b>' +orden[i][3];
                    total.innerHTML = '<b>' + 'Total: ' + '</b>' +orden[i][4];
                    if(username == user[0][1]){
                        document.getElementById("pic").setAttribute('src', 'img/Afterclap-8.png');
                    }else if(username == user[1][1]){
                        document.getElementById("pic").setAttribute('src', 'img/Afterclap-1.png');
                    }else if(username == user[2][1]){
                        document.getElementById("pic").setAttribute('src', 'img/Afterclap-5.png');
                    }else if(username == user[3][1]){
                        document.getElementById("pic").setAttribute('src', 'img/Afterclap-6.png');
                    }else if(username == user[4][1]){
                        document.getElementById("pic").setAttribute('src', 'img/Afterclap-7.png');
                    }else if(username == user[5][1]){
                        document.getElementById("pic").setAttribute('src', 'img/Afterclap-9.png');
                    }else if(username == user[6][1]){
                        document.getElementById("pic").setAttribute('src', 'img/Afterclap-3.png');
                    }
                }
        }}

        var bt_entrar = document.querySelector("#login");
        bt_entrar.addEventListener('click',saludo); 


        var trabajadores = document.getElementById("trabajadores");
        var main = document.getElementById("main");
        var selected = document.getElementById("selected");
        var equipo = document.getElementById("equipo");
        var marcas = document.getElementById("marcas");
        var marcas3 = document.getElementById("marcas3");
        var ped = document.getElementById("ped");
        var pedidos = document.getElementById("pedidos");
        var pro = document.getElementById("pro");
        var productos = document.getElementById("productos");
        var carrito = document.getElementById("carrito");
        var car = document.getElementById("car");

        function mostrar (){
            equipo.classList.remove("team");
            main.classList.remove("usuario-info");
            selected.classList.remove("selected");
            marcas.classList.add("marcas1");
            marcas3.classList.remove("selected");
            trabajadores.classList.add("selected");
            ped.classList.remove("selected");
            pedidos.classList.add("pedidos1");
            pro.classList.remove("selected");
            productos.classList.add("productos1");
            carrito.classList.add("carrito1");
            car.classList.remove("selected");
        }

        trabajadores.addEventListener('click',mostrar);

        function mostrarInicio() {
            equipo.classList.add("team");
            main.classList.add("usuario-info");
            selected.classList.add("selected");
            marcas.classList.add("marcas1");
            marcas3.classList.remove("selected");
            trabajadores.classList.remove("selected");
            ped.classList.remove("selected");
            pedidos.classList.add("pedidos1");
            pro.classList.remove("selected");
            productos.classList.add("productos1");
            carrito.classList.add("carrito1");
            car.classList.remove("selected");
        }

        selected.addEventListener('click',mostrarInicio);

        function mostrarMarcas() {
            equipo.classList.add("team");
            main.classList.remove("usuario-info");
            selected.classList.remove("selected");
            marcas3.classList.add("selected");
            trabajadores.classList.remove("selected");
            marcas.classList.remove("marcas1");
            ped.classList.remove("selected");
            pedidos.classList.add("pedidos1");
            pro.classList.remove("selected");
            productos.classList.add("productos1");
            carrito.classList.add("carrito1");
            car.classList.remove("selected");
        }

        marcas3.addEventListener('click',mostrarMarcas);

        function mostrarPedidos() {
            equipo.classList.add("team");
            main.classList.remove("usuario-info");
            selected.classList.remove("selected");
            marcas3.classList.remove("selected");
            trabajadores.classList.remove("selected");
            marcas.classList.add("marcas1");
            ped.classList.add("selected");
            pedidos.classList.remove("pedidos1");
            pro.classList.remove("selected");
            productos.classList.add("productos1");
            carrito.classList.add("carrito1");
            car.classList.remove("selected");
        }

       ped.addEventListener('click',mostrarPedidos);

       function mostrarProductos() {
            equipo.classList.add("team");
            main.classList.remove("usuario-info");
            selected.classList.remove("selected");
            marcas3.classList.remove("selected");
            trabajadores.classList.remove("selected");
            marcas.classList.add("marcas1");
            ped.classList.remove("selected");
            pedidos.classList.add("pedidos1");
            productos.classList.remove("productos1");
            pro.classList.add("selected");
            carrito.classList.add("carrito1");
            car.classList.remove("selected");
        }

        pro.addEventListener('click',mostrarProductos);

        function mostrarCarrito() {
            equipo.classList.add("team");
            main.classList.remove("usuario-info");
            selected.classList.remove("selected");
            marcas3.classList.remove("selected");
            trabajadores.classList.remove("selected");
            marcas.classList.add("marcas1");
            ped.classList.remove("selected");
            pedidos.classList.add("pedidos1");
            productos.classList.add("productos1");
            pro.classList.remove("selected");
            carrito.classList.remove("carrito1");
            car.classList.add("selected");
        }

        car.addEventListener('click',mostrarCarrito);

        var section_administrador = document.getElementById("section-administrador");
        var section_login = document.getElementById("section-login");
        var body = document.getElementById("body");
        var salir = document.getElementById("salir");
        var parrafo = document.getElementById("warnings");

        export function Salir(){
            section_administrador.classList.add("activar-block");
            section_login.classList.add("activar-flex");
            body.classList.add("body");
            parrafo.classList.add("warnings2");
        }

        salir.addEventListener('click',Salir);

        var parrafo = document.getElementById("warnings");

        export function remover(){
            parrafo.classList.remove("warnings2");
        }

        var bt_entrar = document.getElementById("boton");
        bt_entrar.addEventListener('click',remover);