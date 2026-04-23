document.addEventListener("DOMContentLoaded", function(){
    //EJEMPLO CALCULADORA
    document.getElementById("formCalculadora").addEventListener("submit", function(e){
        e.preventDefault();// evita que el formulario me vote de la pagina

        let nume1 = parseFloat(document.getElementById("numero1").value);
        let nume2 = parseFloat(document.getElementById("numero2").value);
        let operacion = document.getElementById("operacion").value;
        let resultado = document.getElementById("resultado");

        if(isNaN(nume1)||isNaN(nume2)){
            alert("Ingresa un numero pe!");
            resultado.textContent = "Ingrese números válidos";
            return;
        }

        let res; //temporal para almacenar el resultado

        switch (operacion) {
            case "sum":
                res = nume1+nume2;
                break;
            case "rest":
                res = nume1-nume2;
                break;
            case "mul":
                res = nume1*nume2;
                break;
            case "div":
                alert("haganlo Ustedes");
                break;
            default:
                break;
        }

    resultado.textContent = "Resultado es "+res;

    });
    //ejercicio 04
   document.getElementById("formEje04").addEventListener("submit", function(e){
        e.preventDefault();// evita que el formulario me vote de la pagina

        let salario = parseFloat(document.getElementById("salario").value);
        let horasT = parseFloat(document.getElementById("horasT").value);
        let horasE=0;
        let salarioE=0;
        let sueldo=0;
        let VariableSalida = document.getElementById("salida");
      
        if(isNaN(salario)||isNaN(horasT)){
            VariableSalida.textContent = "Ingrese números válidos";
            alert("Ingresa un numero pe!");
            return;
        }
        if(horasT>40){
            alert("Usted trabajó mas de 40 horas, y merece un pago extra");
            horasE = horasT-40;
            salarioE = horasE*(salario*1.5);
            sueldo = salario*40+salarioE;
        }else{
         sueldo = salario*horasT;   
        }

        VariableSalida.textContent = "Su sueldo a pagar es de S/."+sueldo;
        });
     /*   
        document.getElementById("formEje04").addEventListener("submit", function(e){
        e.preventDefault();
            //AQUI ES DONDE RESUELVES TU EJERCICIO
        });
*/
})
