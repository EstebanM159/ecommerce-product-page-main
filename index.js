
let slideIndex = 1;
let actual = 1;
let activo = false;
class producto {
  constructor(nombreProducto,precioReal, desc, precioDesc) {
    this.nombreProducto = nombreProducto;
    this.precioReal = precioReal;
    this.desc = desc;
    this.precioDesc = precioDesc;
  }
}
const Sneakers = new producto("Fall Limited Edition Sneakers",250,50,125);
const contador = document.querySelector(".cantidad");
contador.innerHTML=`<span class="cantidad">1</span>`;
const nombreProd = document.querySelector(".nombre-producto");
nombreProd.innerHTML = Sneakers.nombreProducto;
const precio = document.querySelector(".precio");
precio.innerHTML += Sneakers.precioDesc;
const descuento = document.querySelector(".descuento");
descuento.innerHTML += Sneakers.desc + '%';
const valorReal = document.querySelector(".precio-old");
valorReal.innerHTML += Sneakers.precioReal;
const tituloDesc = document.querySelector(".titulo-desc");
const compras = document.querySelector(".compras");
const prodInCart = document.querySelector("prod-in-cart");
const precioCart = document.querySelector(".precio-cart");
const precioTotal = document.querySelector(".total");
const containerFoto = document.querySelector(".container-imagen-cart");
const butonDelete = document.getElementById("buton-delete");
//sideNav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// Slider
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }  
  slides[slideIndex-1].style.display = "block";

}
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

const buttonCart = document.getElementById("cart-b");
buttonCart.addEventListener('click',()=>{
  if(!activo){
    document.getElementById("carrito").style.zIndex =1;
    document.getElementById("carrito").style.display = 'inline';
    activo=true;
  }else{
    document.getElementById("carrito").style.display = 'none';
    document.getElementById("carrito").style.zIndex =0;
    activo=false
  }
})

// Contador
function sumar(){
  actual++
  contador.innerHTML=`<span class="cantidad">${actual}</span>`
}
function restar(){
  if(actual>0){
    actual--
  }
  contador.innerHTML=`<span class="cantidad">${actual}</span>`
}
//ADDTOCART
  tituloDesc.innerHTML='Your cart is empty';
function agregarAlCarro(){  
  tituloDesc.innerHTML = Sneakers.nombreProducto; 
  precioCart.innerHTML ='$'+ Sneakers.precioDesc + ` X ${actual} `; 
  let tot= actual * Sneakers.precioDesc;
  precioTotal.innerHTML = ` $${tot}`; 
  containerFoto.innerHTML=(`<img class="img-carrito" src="images/image-product-1-thumbnail.jpg" alt="">`);
  butonDelete.style.display = 'flex'
  console.log(actual);
  // Aca solo estoy mostrando los datos deberia crear otro objeto o mandarlo el mismo objeto a otro lugar
}

function borrarCarrito(){
  tituloDesc.innerHTML = '';
  precioTotal.innerHTML = '';
  precioCart.innerHTML =''; 
  containerFoto.innerHTML='';
  tituloDesc.innerHTML='Your cart is empty';
  butonDelete.style.display	= "none";
}

