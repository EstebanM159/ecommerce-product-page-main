
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
// thumbnail
const carreteContainer = document.querySelector('.all-photos')
//sideNav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  closeCart()
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// Slider mejorado
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let image = document.querySelector('.productImage');
  image.setAttribute("src", `images/image-product-${n}.jpg`)
  slides[0].style.display = "block";
}
// Next/previous controls
function prev() {
  if(slideIndex>1){
    slideIndex -=1
    console.log(slideIndex)
    showSlides(slideIndex);
    currentPhoto(slideIndex);
  }
  return slideIndex
}
function next() {
  if(slideIndex<4){
    slideIndex +=1
    showSlides(slideIndex);
    currentPhoto(slideIndex);
  }
  return slideIndex
}
// no es funcional
function allPhotos(){
  for (let i = 1; i < 5; i++) {
    let img = document.createElement('img');
    img.src = `images/image-product-${i}-thumbnail.jpg`
    img.id = i;
    img.className = "fotoCarrete"
    carreteContainer.appendChild(img);
  }
  let img1 = document.getElementById("1")
  img1.style.filter = "initial";
}
function currentPhoto(cur){
  let carrete = document.querySelectorAll('.fotoCarrete');
  // Itera sobre todas las imágenes en el carrete
  carrete.forEach((foto, index) => {
    // Restablece el filtro de brillo para todas las imágenes
    foto.style.filter = "brightness(0.5)";
    // Destaca la imagen actual ajustando el brillo
    if (index === cur - 1) {
      foto.style.filter = "initial";
    }
  });
}
allPhotos();
showSlides(slideIndex);
const buttonCart = document.getElementById("cart-b");
buttonCart.addEventListener('click',()=>{
  if(!activo){
    openCart()
    closeNav()
  }else{
    closeCart()
  }
})
function openCart(){
    document.getElementById("carrito").style.zIndex = 1;
    document.getElementById("carrito").style.display = 'inline';
    activo=true;
}
function closeCart(){
    document.getElementById("carrito").style.display = 'none';
    document.getElementById("carrito").style.zIndex =0;
    activo=false
}
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

