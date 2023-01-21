function encriptador() {
    var output = ""
    var input = document.getElementById("texto-encriptar").value;
    for (var i=0; i < input.length; i++) {
        switch (input[i]) {
            case 'a':
                output += 'ai';
                break;
            case 'e':
                output += 'enter';
                break;
            case 'i':
                output += 'imes';
                break;
            case 'o':
                output += 'ober';
                break;
            case 'u':
                output += 'ufat';
                break;
            default:
                output += input[i];
        }
    }
    document.getElementById("resultado").innerHTML = output;
}

function desencriptador() {
    var output = ""
    var input = document.getElementById("texto-encriptar").value;
    for (var i=0; i < input.length; i++) {
        switch (input[i]) {
            case 'a':
                if (input[i+1] == 'i'){
                    output += 'a';
                    i += 1
                    break;
                }
            case 'e':
                if (input[i+1] == 'n' && input[i+2] == 't' && input[i+3] == 'e' && input[i+4] == 'r') {
                    output += 'e';
                    i += 4
                    break;
                }
                
            case 'i':
                if (input[i+1] == 'm' && input[i+2] == 'e' && input[i+3] == 's') {
                    output += 'i';
                    i += 3
                    break;
                }
            case 'o':
                if (input[i+1] == 'b' && input[i+2] == 'e' && input[i+3] == 'r') {
                    output += 'o';
                    i += 3
                    break;
                }
            case 'u':
                if (input[i+1] == 'f' && input[i+2] == 'a' && input[i+3] == 't') {
                    output += 'u';
                    i += 3
                    break;
                }
            default:
                output += input[i];
        }
    }
    document.getElementById("resultado").innerHTML = output;
}

function encriptadoFinal() {
    var texto = document.getElementById("texto-encriptar").value;
    result = document.getElementById("true-output");
    not_result = document.getElementById("false-output");

    if (texto == "") {
        not_result.style.display = 'inline-block';
        result.style.display = 'none';
    } else {
        not_result.style.display = 'none';
        result.style.display = 'inline-block';
        encriptador();
    }
}

function desencriptadoFinal() {
    var texto = document.getElementById("texto-encriptar").value;
    result = document.getElementById("true-output");
    not_result = document.getElementById("false-output");

    if (texto == "") {
        not_result.style.display = 'inline-block';
        result.style.display = 'none';
    } else {
        not_result.style.display = 'none';
        result.style.display = 'inline-block';
        desencriptador();
    }
}

function copy() {
    let copyText = document.querySelector("#resultado");
    copyText.select();
    document.execCommand("copy");
}

document.getElementById("encriptar").onclick = encriptadoFinal;
document.getElementById("desencriptar").onclick = desencriptadoFinal;
document.querySelector("#copiar").addEventListener("click", copy);
