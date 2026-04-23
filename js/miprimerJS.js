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

function cambiarTitulo() {
    document.getElementById("titulo").textContent = "Practicando JS";
    document.getElementById("titulo").style.color = "#290c60"; 
    document.getElementById("logoSenati").src = "images/senati3.png";
    document.getElementById("encabezado").style.background = "#89cce2";
}

function suma() {
    let num1 = 7;
    let num2 = 9;
    let suma = num1 + num2;
    alert("La suma es de: " + suma);
}

function eje01() {
    let p1 = 10;
    let p2 = 5;
    let p3 = 15;
    let c1 = 3;
    let c2 = 18;
    let c3 = 6;
    let Stotal, total;

    Stotal = (p1 * c1) + (p2 * c2) + (p3 * c3);

    if (Stotal > 100) {
        total = Stotal * 0.95;
        alert("Su compra lleva descuento");
    } else {
        total = Stotal;
    }
    alert("El total a pagar es de: S/." + total);
}

function eje02() {
    let amigos = 8;
    let total = 240;
    let cuota = total / amigos;
    alert("Son " + amigos + " amigos y la cuota del total S/." + total + " es de: S/." + cuota);
}

function ejm9(){
    let distanciaR = 120
    let Ta = 10
    let Tb = 3
    Stotal = (Ta+distanciaR*Tb)
    alert("El total sera de: S/."+Stotal)
}



