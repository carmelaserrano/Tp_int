const librosDisponibles = document.getElementById("librosDisponibles");
const carrito = document.getElementById("carrito");
const total = document.getElementById("total");

let sumaTotal = 0;

function agregarLibro() {
  const titulo = document.getElementById("titulo").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);

  if (titulo === "" || isNaN(precio) || precio <= 0) {
    alert("Por favor ingrese un título válido y un precio mayor que 0.");
    return;
  }

  const libroDiv = document.createElement("div");
  libroDiv.className = "libro";

  const tituloP = document.createElement("p");
  tituloP.textContent = titulo;

  const precioP = document.createElement("p");
  precioP.textContent = `Precio: $${precio.toFixed(2)}`;

  const botonAgregar = document.createElement("button");
  botonAgregar.textContent = "Agregar al carrito";
  botonAgregar.onclick = () => agregarAlCarrito(titulo, precio);

  libroDiv.appendChild(tituloP);
  libroDiv.appendChild(precioP);
  libroDiv.appendChild(botonAgregar);

  librosDisponibles.appendChild(libroDiv);

  // Limpiar campos
  document.getElementById("titulo").value = "";
  document.getElementById("precio").value = "";
}

function agregarAlCarrito(titulo, precio) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "item-carrito";

  const texto = document.createElement("span");
  texto.textContent = `${titulo} - $${precio.toFixed(2)}`;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = () => {
    carrito.removeChild(itemDiv);
    sumaTotal -= precio;
    actualizarTotal();
  };

  itemDiv.appendChild(texto);
  itemDiv.appendChild(botonEliminar);
  carrito.appendChild(itemDiv);

  sumaTotal += precio;
  actualizarTotal();
}

function actualizarTotal() {
  total.textContent = `Total: $${sumaTotal.toFixed(2)}`;
}