// logica
import {user} from '../Data/user.js'

const nombre = document.getElementById("username");
const pass = document.getElementById("password");
const form = document.querySelector("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    for(let i = 0; i<=7;i++){
        e.preventDefault()
        let warnings = "";
        let entrar = false;
    if(nombre.value.length != user[i][1]){
        warnings += 'Nombre Incorrecto <br>';
        entrar = true;
    }
    if(pass.value.length != user[i][2]){
        warnings += 'Contraseña Incorrecta';
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }
}})