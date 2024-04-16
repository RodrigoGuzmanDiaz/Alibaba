// login
import {formulario} from "../componentes/layout_login.js"

export function crearLogin(){

    // ELEMENTOS DEL DOM
    let div_login = document.querySelector("#section-login");


    // INSERTAR FORMULARIO EN EL DOM
    div_login.appendChild(formulario);

}

/* Librería de componentes */
export var section_administrador = document.getElementById("section-administrador");
export var section_login = document.getElementById("section-login");
export var section_body = document.getElementById("body");
export var footer = document.getElementById("footer");

// Librería de usuario
import {user} from "../Data/user.js";
import { adminstrador } from "./administrador.js";

// Función de verificación de credenciales
export function login(username,password){

    for(let i = 0; i<=7;i++){
        if(username === user[i][1] || username === user[i][5]){
            if(password === user[i][2]){
                console.log("Ahora tienes acceso");
                adminstrador();
            }else{
                console.log('Constraseña incorrecta');
            }
        }else {
            console.log("Usuario incorrecto");
        }
    }

}