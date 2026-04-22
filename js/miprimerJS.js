// Console.log nos sirve para depurar y probar nuestras salidas
console.log("Hola mundo desde JavaScript");

// alert nos sirve para mostrarle un alert al usuario
alert("Hola Mundo. Esto es una Alerta");

function cambiarCarita() {
    document.getElementById("carita").src = "imagenes/sad.png";
    alert("Por que tas triste");
}

function feliz() {
    document.getElementById("carita").src = "imagenes/happy.jpg";
    document.getElementById("TituloJS").textContent = "Ejemplo de Caritas";
}

function nombresNav() {
    document.getElementById("m1").textContent = "Index";
    document.getElementById("m2").textContent = "listas";
    document.getElementById("m3").textContent = "tablas";
    document.getElementById("m4").textContent = "js";
    document.getElementById("m5").textContent = "tarea de js";
    document.getElementById("m6").textContent = "formulario";
    document.getElementById("m7").textContent = "personal";
}




