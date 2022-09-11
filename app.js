let productos = [
    {
        id:1,
        Nombre: "Draconic white",
        descripcion: "Teclado Redragon Draconic White",
        precio: 5000,
        cantidad:1,
        img:"./imagenes/redragonDraconicWhite.jpg"
    },
    {
        id:2,
        Nombre: "Huntsman",
        descripcion: "Teclado Razer Hunstsman",
        precio: 6000,
        cantidad:1,
        img:"./imagenes/razerHuntsman.jpg"
    },
    {
        id:3,
        Nombre: "Alloy Origins",
        descripcion: "Teclado RHiperX Alloy Origins",
        precio: 7000,
        cantidad:1,
        img:"./imagenes/hiperxAlloyOrigins.jpg"  
    },
    {
        id:4,
        Nombre: "Kumara Black",
        descripcion: "Teclado Redragon Kumara Black",
        precio: 8000,
        cantidad:1,
        img:"./imagenes/redragonKumaraBlack.jpg" 
    }
]

const dibujarProductos = ()=>{
    let contenedor = document.getElementById("container");
    productos.forEach((producto,indice)=>{
        let card = document.createElement("div");
        card.classList.add("card", "col-sm-12", "col-lg-3");
        card.innerHTML=`<img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.Nombre}</h5>
          <p class="card-text">${producto.precio}</p>
          <a href="#" class="btn btn-info" onClick="agregarAlCarrito()" >Comprar</a>
        </div>`;
        contenedor.appendChild(card)
    });
}
dibujarProductos()

const agregarAlCarrito =()=>{
    alert("Producto agregado al carrito")
}



