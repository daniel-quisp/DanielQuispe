

const productos = [
  { nombre: "Lechuga",       categoria: "verduras", precio: 3.50,  descripcion: "Fresca y crocante para ensaladas." },
  { nombre: "Espinaca",      categoria: "verduras", precio: 4.20,  descripcion: "Ideal para jugos y salteados." },
  { nombre: "Zanahoria",     categoria: "verduras", precio: 3.80,  descripcion: "Buena para jugos y guisos." },
  { nombre: "Tomate",        categoria: "verduras", precio: 4.00,  descripcion: "Muy usado en la cocina diaria." },
  { nombre: "Pepino",        categoria: "verduras", precio: 3.60,  descripcion: "Refrescante para ensaladas." },
  { nombre: "Brócoli",       categoria: "verduras", precio: 5.10,  descripcion: "Muy nutritivo y saludable." },
  { nombre: "Coliflor",      categoria: "verduras", precio: 5.00,  descripcion: "Útil para sopas y guisos." },
  { nombre: "Apio",          categoria: "verduras", precio: 3.20,  descripcion: "Sirve para caldos y jugos." },
  { nombre: "Pimiento",      categoria: "verduras", precio: 4.60,  descripcion: "Aporta color y sabor." },
  { nombre: "Cebolla",       categoria: "verduras", precio: 2.90,  descripcion: "Base de muchas recetas." },

  { nombre: "Manzana",       categoria: "frutas",   precio: 5.40,  descripcion: "Dulce y práctica para el día." },
  { nombre: "Plátano",       categoria: "frutas",   precio: 4.90,  descripcion: "Buena fuente de energía." },
  { nombre: "Naranja",       categoria: "frutas",   precio: 4.70,  descripcion: "Ideal para jugos naturales." },
  { nombre: "Fresa",         categoria: "frutas",   precio: 7.20,  descripcion: "Perfecta para postres." },
  { nombre: "Mango",         categoria: "frutas",   precio: 6.80,  descripcion: "Fruta tropical muy rica." },
  { nombre: "Piña",          categoria: "frutas",   precio: 8.20,  descripcion: "Muy usada en jugos." },
  { nombre: "Papaya",        categoria: "frutas",   precio: 6.10,  descripcion: "Ligera y suave." },
  { nombre: "Uva",           categoria: "frutas",   precio: 7.40,  descripcion: "Pequeña y dulce." },
  { nombre: "Pera",          categoria: "frutas",   precio: 5.80,  descripcion: "Fresca y suave." },
  { nombre: "Melón",         categoria: "frutas",   precio: 7.00,  descripcion: "Muy refrescante." },

  { nombre: "Chía",          categoria: "semillas", precio: 9.50,  descripcion: "Usada en bebidas y postres." },
  { nombre: "Linaza",        categoria: "semillas", precio: 8.30,  descripcion: "Aporta fibra." },
  { nombre: "Sésamo",        categoria: "semillas", precio: 7.60,  descripcion: "Útil en panes y snacks." },
  { nombre: "Girasol",       categoria: "semillas", precio: 8.10,  descripcion: "Buen snack natural." },
  { nombre: "Calabaza",      categoria: "semillas", precio: 7.90,  descripcion: "Semilla tostada para comer." },
  { nombre: "Quinua",        categoria: "semillas", precio: 10.50, descripcion: "Muy nutritiva." },
  { nombre: "Amaranto",      categoria: "semillas", precio: 9.20,  descripcion: "Muy usado en desayunos." },
  { nombre: "Cañihua",       categoria: "semillas", precio: 10.80, descripcion: "Grano andino muy completo." },
  { nombre: "Sacha Inchi",   categoria: "semillas", precio: 12.00, descripcion: "Semilla nutritiva." },
  { nombre: "Ajonjolí",      categoria: "semillas", precio: 7.40,  descripcion: "Muy común en panes." },

  { nombre: "Lenteja",       categoria: "granos",   precio: 6.40,  descripcion: "Usada en sopas." },
  { nombre: "Garbanzo",      categoria: "granos",   precio: 7.10,  descripcion: "Sirve para ensaladas." },
  { nombre: "Frejol canario",categoria: "granos",   precio: 6.90,  descripcion: "Muy usado en menestras." },
  { nombre: "Pallares",      categoria: "granos",   precio: 7.30,  descripcion: "Clásico de la cocina." },
  { nombre: "Arveja",        categoria: "granos",   precio: 5.90,  descripcion: "Ideal para sopas." },
  { nombre: "Arroz integral",categoria: "granos",   precio: 7.80,  descripcion: "Opción saludable." },
  { nombre: "Maíz",          categoria: "granos",   precio: 5.50,  descripcion: "Versátil y práctico." },
  { nombre: "Avena",         categoria: "granos",   precio: 6.20,  descripcion: "Muy usada en desayuno." },
  { nombre: "Trigo",         categoria: "granos",   precio: 5.70,  descripcion: "Base para varias comidas." },
  { nombre: "Cebada",        categoria: "granos",   precio: 5.60,  descripcion: "Usada en sopas y bebidas." }
];

const categorias = {
  verduras: "Verduras",
  frutas:   "Frutas",
  semillas: "Semillas",
  granos:   "Granos y Legumbres"
};

const imagenesPorCategoria = {
  verduras: ["imagenes/verduras/v1.jpg","imagenes/verduras/v2.jpg","imagenes/verduras/v3.jpg","imagenes/verduras/v4.jpg","imagenes/verduras/v5.jpg","imagenes/verduras/v6.jpg","imagenes/verduras/v7.jpg","imagenes/verduras/v8.jpg","imagenes/verduras/v9.jpg","imagenes/verduras/v10.jpg"],
  frutas:   ["imagenes/frutas/f1.jpg","imagenes/frutas/f2.jpg","imagenes/frutas/f3.jpg","imagenes/frutas/f4.jpg","imagenes/frutas/f5.jpg","imagenes/frutas/f6.jpg","imagenes/frutas/f7.jpg","imagenes/frutas/f8.jpg","imagenes/frutas/f9.jpg","imagenes/frutas/f10.jpg"],
  semillas: ["imagenes/semillas/s1.jpg","imagenes/semillas/s2.jpg","imagenes/semillas/s3.jpg","imagenes/semillas/s4.jpg","imagenes/semillas/s5.jpg","imagenes/semillas/s6.jpg","imagenes/semillas/s7.jpg","imagenes/semillas/s8.jpg","imagenes/semillas/s9.jpg","imagenes/semillas/s10.jpg"],
  granos:   ["imagenes/legumbres/l1.jpg","imagenes/legumbres/l2.jpg","imagenes/legumbres/l3.jpg","imagenes/legumbres/l4.jpg","imagenes/legumbres/l5.jpg","imagenes/legumbres/l6.jpg","imagenes/legumbres/l7.jpg","imagenes/legumbres/l8.jpg","imagenes/legumbres/l9.jpg","imagenes/legumbres/l10.jpg"]
};



const articulos = {
  lechuga: {
    titulo: "Todo sobre la Lechuga",
    imagen: "imagenes/verduras/v1.jpg",
    contenido: `
      <p>La <strong>lechuga</strong> es una de las verduras más consumidas en el mundo. Rica en agua, fibra y vitaminas A y K.</p>
      <h5>Beneficios</h5>
      <ul>
        <li>Hidrata el organismo</li>
        <li>Baja en calorías, ideal para dietas</li>
        <li>Aporta antioxidantes naturales</li>
      </ul>
      <h5>¿Cómo usarla?</h5>
      <p>Perfecta en ensaladas, wraps, hamburguesas y jugos verdes.</p>
    `
  },
  manzana: {
    titulo: "Todo sobre la Manzana",
    imagen: "imagenes/frutas/f1.jpg",
    contenido: `
      <p>La <strong>manzana</strong> es una fruta versátil con gran contenido de fibra y vitamina C.</p>
      <h5>Beneficios</h5>
      <ul>
        <li>Mejora la digestión</li>
        <li>Ayuda a controlar el colesterol</li>
        <li>Rica en antioxidantes</li>
      </ul>
      <h5>¿Cómo usarla?</h5>
      <p>Se come sola, en jugos, tortas, ensaladas de frutas y compotas.</p>
    `
  },
  chia: {
    titulo: "Todo sobre la Chía",
    imagen: "imagenes/semillas/s1.jpg",
    contenido: `
      <p>La <strong>chía</strong> es una semilla supersaludable con alto contenido de omega-3 y fibra.</p>
      <h5>Beneficios</h5>
      <ul>
        <li>Aporta energía sostenida</li>
        <li>Favorece la digestión</li>
        <li>Fuente vegetal de omega-3</li>
      </ul>
      <h5>¿Cómo usarla?</h5>
      <p>En agua de chía, pudines, yogures, batidos y panes integrales.</p>
    `
  }
};

function mostrarModalProducto(nombre, descripcion, precio, imagen, categoria) {
  
  const slug = nombre.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    .replace(/\s+/g, "");                              

  const art = articulos[slug];

  document.getElementById("modalArticuloTitulo").textContent = nombre;

  if (art) {
    
    document.getElementById("modalArticuloContenido").innerHTML = `
      <div class="row align-items-start g-4">
        <div class="col-md-4">
          <img src="${imagen}" class="img-fluid rounded" alt="${nombre}"
               style="max-height:260px; object-fit:cover; width:100%;">
        </div>
        <div class="col-md-8">
          <span class="badge text-bg-success mb-2">${categorias[categoria]}</span>
          <p class="fw-bold text-success fs-5">S/ ${precio.toFixed(2)}</p>
          ${art.contenido}
          <button class="btn btn-success mt-2" onclick="comprar('${nombre}')">Comprar</button>
        </div>
      </div>
    `;
  } else {
    
    document.getElementById("modalArticuloContenido").innerHTML = `
      <div class="row align-items-center g-4">
        <div class="col-md-4">
          <img src="${imagen}" class="img-fluid rounded" alt="${nombre}"
               style="max-height:260px; object-fit:cover; width:100%;">
        </div>
        <div class="col-md-8">
          <span class="badge text-bg-success mb-2">${categorias[categoria]}</span>
          <p class="text-secondary">${descripcion}</p>
          <p class="fw-bold text-success fs-5">S/ ${precio.toFixed(2)}</p>
          <button class="btn btn-success mt-2" onclick="comprar('${nombre}')">Comprar</button>
        </div>
      </div>
    `;
  }

  const modal = new bootstrap.Modal(document.getElementById("modalArticulo"));
  modal.show();
}
function cerrarArticulo() {
  const seccion = document.getElementById("seccion-articulo");
  if (seccion) {
    seccion.innerHTML = "";
    seccion.style.display = "none";
  }
}



function obtenerImagen(categoria, indice) {
  const lista = imagenesPorCategoria[categoria];
  if (!lista || lista.length === 0) return "imagenes/default.jpg";
  return lista[indice % lista.length];
}

function comprar(nombre) {
  alert(`La compra de "${nombre}" aún no está disponible porque el proyecto no tiene backend.`);
}

function mostrarDetalleProducto(nombre, descripcion, precio, imagen) {
  const detalle = document.getElementById("detalle-producto");
  if (!detalle) return;

  detalle.innerHTML = `
    <div class="card shadow-sm border-0 p-3">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img src="${imagen}" class="img-fluid rounded" alt="${nombre}">
        </div>
        <div class="col-md-8">
          <h3 class="mb-2">${nombre}</h3>
          <p class="mb-2">${descripcion}</p>
          <p class="fw-bold text-success mb-3">Precio: S/ ${precio.toFixed(2)}</p>
          <button class="btn btn-success" onclick="comprar('${nombre}')">Comprar</button>
        </div>
      </div>
    </div>
  `;
  detalle.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProductos() {
  const contenedor = document.getElementById("productos");
  const buscador   = document.getElementById("buscador");
  if (!contenedor || !buscador) return;

  const categoria = document.body.dataset.categoria;
  const texto     = buscador.value.toLowerCase().trim();

  const filtrados = productos.filter(p => {
    const coincideCategoria = p.categoria === categoria;
    const coincideTexto     = p.nombre.toLowerCase().includes(texto) ||
                              p.descripcion.toLowerCase().includes(texto);
    return coincideCategoria && coincideTexto;
  });

  contenedor.innerHTML = "";

  if (filtrados.length === 0) {
    contenedor.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning mb-0">No se encontraron productos.</div>
      </div>`;
    return;
  } 

  filtrados.forEach((p, index) => {
    const col    = document.createElement("div");
    col.className = "col-sm-6 col-lg-4 col-xl-3";
    const imagen = obtenerImagen(p.categoria, index);

    col.innerHTML = `
      <div class="card h-100 shadow-sm border-0" style="border-radius:1rem; overflow:hidden; cursor:pointer;">
        <img src="${imagen}" class="card-img-top" alt="${p.nombre}" style="height:300px; object-fit:cover;">
        <div class="card-body d-flex flex-column">
          <span class="badge text-bg-success mb-2">${categorias[p.categoria]}</span>
          <h5 class="card-title fw-bold">${p.nombre}</h5>
          <p class="card-text small text-secondary">${p.descripcion}</p>
          <p class="fw-bold text-success">S/ ${p.precio.toFixed(2)}</p>
          <button class="btn btn-success mt-auto">Comprar</button>
        </div>
      </div>`;

    const tarjeta = col.querySelector(".card");
    tarjeta.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "button") return;
  mostrarModalProducto(p.nombre, p.descripcion, p.precio, imagen, p.categoria);
});

    col.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      comprar(p.nombre);
    });

    contenedor.appendChild(col);
  });
} 

function crearBotonesFlotantes() {
  if (document.getElementById("btnInicioFlotante")) return;

  const barra = document.createElement("div");
  barra.style.cssText = "position:fixed;right:18px;bottom:18px;z-index:9999;display:flex;flex-direction:column;gap:10px;";
  barra.innerHTML = `
    <a id="btnInicioFlotante" href="index.html"
       class="btn btn-success shadow"
       style="border-radius:999px;padding:.7rem 1rem;font-weight:600;">Inicio</a>
    <button id="btnArribaFlotante" type="button"
       class="btn btn-outline-success shadow"
       style="border-radius:999px;display:none;padding:.7rem 1rem;font-weight:600;">↑ Arriba</button>
  `;
  document.body.appendChild(barra);

  const btnArriba = document.getElementById("btnArribaFlotante");
  btnArriba.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const mostrar = () => { btnArriba.style.display = window.scrollY > 300 ? "block" : "none"; };
  window.addEventListener("scroll", mostrar);
  mostrar();
}

function prepararFormularios() {
  const formContacto = document.getElementById("formContacto");
  if (formContacto) {
    formContacto.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensaje enviado correctamente.");
      e.target.reset();
    });
  }

  const formReclamos = document.getElementById("formReclamos");
  if (formReclamos) {
    formReclamos.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Reclamo registrado correctamente.");
      e.target.reset();
    });
  }
}


document.addEventListener("DOMContentLoaded", () => {
  crearBotonesFlotantes();
  prepararFormularios();
  renderProductos();
});