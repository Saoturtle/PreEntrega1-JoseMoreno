let user = "jose";
let password = "pass1234";
cont=0;


while(cont < 3) {
	let usuario=prompt("Introduzca su usuario");
	let contrasena=prompt("Introduzca su contraseña");

if(usuario === user && contrasena === password) {
	alert("Bienvenido " + user);
    cont = 0;
		break;
}else{
    if(usuario!= user && contrasena === password) {
	    alert("usuario incorrecto");
    }
    else if(usuario === user && contrasena!= password) {
        alert("contraseña incorrecta");
    }
    else{
        cont++;
	    alert("Los datos son incorrectos, ingrasarlos correctamente");
    }
	if(cont==3) {
	    alert("Lo siento, has agotado el número de intentos y se ha bloqueado la cuenta");
		}	
	}
	
}

let nameDog = prompt("Ingrese el nombre de su perro");
let dogAge = parseInt(prompt("Ingrese la edad de su perro"));
let humanAge;

function calcular(){

        if (dogAge === 0) {
            humanAge = "Apenas es un bebe";
            console.log (humanAge);
        }else if (dogAge === 1) {
            humanAge = 15;
            console.log(nameDog + " tiene " + humanAge + " anios humanos");
        }else if (dogAge === 2) {
            humanAge = 24;
            console.log(nameDog + " tiene " + humanAge + " anios humanos");
        }else if (dogAge > 2) {
            humanAge = 24 + (dogAge - 2) * 5;
            console.log(nameDog + " tiene " + humanAge + " anios humanos");
        }else if (dogAge < 0) {
            humanAge = "No ha nacido aun";
        }
    }