// l productos
export let productos = document.createElement("div");
productos.innerHTML =
'<section class="products">'+
'<div>'+
    '<img src="http://iapple-eg.com/wp-content/uploads/2020/03/Macbook-Pro-MPXT2-1-1.jpg" alt="">'+
    '<h3>Macbook Pro (2017)</h3>'+
    '<span><b>ID: </b>1200</span>'+
'</div>'+
'<div>'+
    '<img src="https://streamnet.tech/wp-content/uploads/2022/01/e79f2443-d1a8-47bc-9c50-fdfde6c37753_1.fa375e1ed1bd5df3bb91251431acced0.jpeg" alt="">'+
    '<h3>Macbook Air (2015)</h3>'+
    '<span><b>ID: </b>1300</span>'+
'</div>'+
'<div>'+
    '<img src="https://phonesvendor.com.ng/wp-content/uploads/2021/10/iphone-x4.jpg" alt="">'+
    '<h3>Iphone X</h3>'+
    '<span><b>ID: </b>1400</span>'+
'</div>'+
'<div>'+
    '<img src="https://smaaart.es/8979-large_default/iphone-7-plus-plata-128gb.jpg" alt="">'+
    '<h3>Iphone 7</h3>'+
    '<span><b>ID: </b>1500</span>'+
'</div>'+
'<div>'+
    '<img src="https://i0.wp.com/ktecnology.com/wp-content/uploads/2019/06/8-1.jpg?fit=1000%2C1000&ssl=1" alt="">'+
    '<h3>Iphone 8</h3>'+
    '<span><b>ID: </b>1600</span>'+
'</div>'+
'<div>'+
    '<img src="https://cdn.shopify.com/s/files/1/0101/2522/products/ipad_air_cellular_purple_pdp_image_position-1b_5g_coes_2_c93a567b-9b9e-4b37-b622-81d64911555e_1200x.webp?v=1648966393" alt="">'+
    '<h3>Ipad Air</h3>'+
    '<span><b>ID: </b>1700</span>'+
'</div>'+
'<div>'+
    '<img src="https://applekid.pk/wp-content/uploads/2020/05/airgold-300x300.jpg" alt="">'+
    '<h3>Ipad Mini 3th gen</h3>'+
    '<span><b>ID: </b>1800</span>'+
'</div>'+
'<div>'+
    '<img src="https://img.directindustry.es/images_di/photo-m2/34485-15296781.jpg" alt="">'+
    '<h3>ESC8000 G3</h3>'+
    '<span><b>ID: </b>1900</span>'+
'</div>'+
'<div>'+
    '<img src="https://www.asus.com/media/global/gallery/GwYnxPrOw0rB2y3r_setting_xxx_0_90_end_1000.png" alt="">'+
    '<h3>ESC8000 G4</h3>'+
    '<span><b>ID: </b>2000</span>'+
'</div>'+
'<div>'+
    '<img src="https://www.astringo.co.uk/wp-content/uploads/magictoolbox_cache/feabb61ae2a71c1844359f7cbe8b5d82/1/5/15740/original/3963536867/9380a.jpg" alt="">'+
    '<h3>XPS 13 - 5080</h3>'+
    '<span><b>ID: </b>2100</span>'+ 
'</div>'+
'<div>'+
    '<img src="https://m.media-amazon.com/images/I/61d9qnrUl4L._AC_SS450_.jpg" alt="">'+
    '<h3>XPS 15 - 5070</h3>'+
    '<span><b>ID: </b>2200</span>'+
'</div>'+
'<div>'+
    '<img src="https://images.monoprice.com/productlargeimages/135861.jpg" alt="">'+
    '<h3>Monoprice Ultra Slim Series High Speed HDMI Cable</h3>'+
    '<span><b>ID: </b>2300</span>'+
'</div>'+
'<div>'+
    '<img src="https://images.monoprice.com/productlargeimages/394771.jpg" alt="">'+
    '<h3>Monoprice Ultra Slim Series High Speed HDMI Cable - 4K</h3>'+
    '<span><b>ID: </b>2400</span>'+
'</div>'+
'<div>'+
    '<img src="https://assets.kogan.com/images/kg-electronic/KXG-HT4189BLK/1-92b44e29bf-ht4189blk.jpg?auto=webp&canvas=340%2C226&fit=bounds&height=226&quality=75&width=340" alt="">'+
    '<h3>Avantree HT3189 Wireless Headphones</h3>'+
    '<span><b>ID: </b>2500</span>'+
'</div>'+
'<div>'+
    '<img src="https://i.ebayimg.com/thumbs/images/g/ROMAAOSwcB1eUliA/s-l225.jpg" alt="">'+
    '<h3>COWIN E7 PRO</h3>'+
    '<span><b>ID: </b>2600</span>'+
'</div>'+
'</section>';

export function crearProductos(){

    // ELEMENTOS DEL DOM
    let div_menu = document.querySelector("#productos");


    // INSERTAR FORMULARIO EN EL DOM
    div_menu.appendChild(productos);

}