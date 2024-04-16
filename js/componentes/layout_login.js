// login
export let formulario = document.createElement("section");
formulario.innerHTML =
'<section class="section-login activar-flex" id="section-login">'+    
'<div class="formulario">'+
    '<form class="form" action="#" id="login">'+
        '<label for="" class="title">'+"Log In"+'</label>'+
        '<label for="" class="user">'+"Username"+'</label>'+
        '<label for="">'+'<input type="text" id="username" required>'+'</label>'+
        '<label for="" class="pass">'+ "Password"+'</label>'+
        '<label for="">'+ '<input type="password" id="password" required>'+'</label>'+
        '<label for="" class="pass2">'+"Forgot password?"+'<button id="boton">LOG IN</button>'+'</label>'+
        '<p class="warnings" id="warnings"></p>'+
    '</form>'+
        '<div class="alibaba">'+
        '<img class="alibaba_logo" src="https://residuosycreatividad.files.wordpress.com/2015/03/alibaba-logo.png" alt="">'+
        '<img class="decoracion" src="https://padecoglobal.com/wp-content/uploads/2022/02/alibaba_vector_compras_en_linea_padeco.svg" alt="">'+
    '</div>'+
'</div>'+
'</section>';