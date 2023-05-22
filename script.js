window.onload = iniciar;

function iniciar() {
    let btnEncriptar = document.getElementById("btnEncriptar");
    let btnDesencriptar = document.getElementById("btnDesencriptar");
    let btnCopiar = document.getElementById("btnCopiar");

    btnEncriptar.addEventListener("click", (event) => {
        let txtInput = document.getElementById("txtInput").value;
        if (validar(txtInput) == true) {
            encriptar(txtInput);
            console.log("Botón encriptar");
        }

    });

    btnDesencriptar.addEventListener("click", (event) => {
        let txtInput = document.getElementById("txtInput").value;
        if (validar(txtInput) == true) {
            desencriptar(txtInput);
            console.log("Botón desencriptar");
        }

    });

    btnCopiar.addEventListener("click", (event) => {
        console.log("Contenido copiado!");
        let txtOutput = document.getElementById("txtOutput").value;
        navigator.clipboard.writeText(txtOutput)
            .then(function () {
                console.log('Texto copiado al portapapeles: ' + txtOutput);
            })
            .catch(function (error) {
                console.error('Error al copiar el texto: ', txtOutput);
            });

        document.getElementById("txtOutput").textContent = ""; // Limpiamos
    });
}

// Funciones
function encriptar(txtInput) {
    let caracteres = txtInput.split("");
    let encriptado = [];
    caracteres.forEach(element => {
        switch(element) {
            case "e": 
                element = "enter";
                break;
            case "i":
                element = "imes";
                break;
            case "a":
                element = "ai";
                break;
            case "o":
                element = "ober";
                break;
            case "u":
                element = "ufat";
                break;
            default:
                element = element;
                break;                    
        }
        encriptado.push(element);
    });

    let txtOutput = document.getElementById("txtOutput");
    txtOutput.textContent = encriptado.join(""); 
}

function desencriptar(txtInput) {
    let caracteres = txtInput.split("");

    let desencriptado = [];
    
    for (let i = 0; i < caracteres.length; i++) {
        let element;
        // Si la letra es una vocal entonces la comparo para desencriptarla
        if (caracteres[i] == "a" || caracteres[i] == "e" || caracteres[i] == "i" 
            || caracteres[i] == "o" || caracteres[i] == "u" ) {
            if (caracteres[i] == "a" && caracteres[i+1] == "i") {
                // Comparamos "ai"
                element = "a";
                console.log("Se agregó 'a' ");
                i = i + 1; // Saltamos la siguiente posición
            }
            // Comparamos "enter"
            if (caracteres[i] == "e" && caracteres[i+1] == "n" && caracteres[i+2] == "t" 
                && caracteres[i+3] == "e" && caracteres[i+4] == "r") {
                element = "e";
                console.log("Se agregó 'e' ");
                i = i + 4;
            }
            // Comparamos "imes"
            if (caracteres[i] == "i" && caracteres[i+1] == "m" && caracteres[i+2] == "e" 
            && caracteres[i+3] == "s") {
                element = "i";
                console.log("Se agregó 'i' ");
                i = i + 3;
            }
            // Comparamos "ober"
            if (caracteres[i] == "o" && caracteres[i+1] == "b" && caracteres[i+2] == "e" 
            && caracteres[i+3] == "r") {
                element = "o"; 
                console.log("Se agregó 'o' ");
                i = i + 3;
            }
            // Comparamos "ufat"
            if (caracteres[i] == "u" && caracteres[i+1] == "f" && caracteres[i+2] == "a" 
            && caracteres[i+3] == "t") {
                element = "u";
                console.log("Se agregó 'u' ");
                i = i + 3;
            }
            desencriptado.push(element);
        } else { // Si no es vocal solo la agregamos
            desencriptado.push(caracteres[i]);
            console.log(`Se agregó ${caracteres[i]}`);
        }
    }

    let txtOutput = document.getElementById("txtOutput");
    txtOutput.textContent = desencriptado.join("");
}

function validar(txtInput) {
    let permitidos = "abcdefghijklmnñopqrstuvxyz!¡¿?,;: ";
    let permitidosCaracter = permitidos.split("");
    let caracter = txtInput.split("");
    for (let element of caracter) {
        if (!permitidos.includes(element)) {
            console.log("Error: letra no válida: " + element);
            showAlert(element);
            return;
        }
    }
    return true;
}

function showAlert(element) {
    document.getElementById("myAlert").style.display = "block";
    document.getElementById("mensaje-error").textContent = ` El caracter ´${element}´ no está permitido`;

    document.getElementById("txtInput").disabled = true;
    document.getElementById("txtOutput").disabled = true;
    document.getElementById("btnEncriptar").disabled = true;
    document.getElementById("btnDesencriptar").disabled = true;
    document.getElementById("btnCopiar").disabled = true;

    document.getElementById("contenido").style.opacity = 0.25;
    document.getElementById("contacto").style.opacity = 0.25;
}

function closeAlert() {
    document.getElementById("myAlert").style.display = "none";

    document.getElementById("txtInput").disabled = false;
    document.getElementById("txtOutput").disabled = false;
    document.getElementById("btnEncriptar").disabled = false;
    document.getElementById("btnDesencriptar").disabled = false;
    document.getElementById("btnCopiar").disabled = false;

    document.getElementById("contenido").style.opacity = 1;
    document.getElementById("contacto").style.opacity = 1;
}

