function encode() {

    if (document.getElementById("mensaje_ingresado").value.length > 0) {
        var mensajeIngresado = document.getElementById("mensaje_ingresado").value;
        var mensajeEncriptado = "";
        for (var i = 0; i < mensajeIngresado.length; i++) {
            switch (mensajeIngresado[i]) {
                case "e":
                    mensajeEncriptado += "enter";
                    break;
                case "i":
                    mensajeEncriptado += "imes";
                    break;
                case "a":
                    mensajeEncriptado += "ai";
                    break;
                case "o":
                    mensajeEncriptado += "ober";
                    break;
                case "u":
                    mensajeEncriptado += "ufat";
                    break;
                default:
                    mensajeEncriptado += mensajeIngresado[i];
                    break;
            }
        }
        document.getElementById("campo_resultado").hidden = false;
        document.getElementById("mensaje_encode").value = mensajeEncriptado;

    } else {
        document.getElementById("mensaje_ingresado").hidden = false;
    }

}

function decode() {

    var mensajeIngresado = document.getElementById("mensaje_ingresado").value;
    document.getElementById("mensaje_ingresado").hidden = false;
    if (mensajeIngresado.length > 0) {

        if (mensajeIngresado.includes("enter") || mensajeIngresado.includes("imes") || mensajeIngresado.includes("ai") || mensajeIngresado.includes("ober") || mensajeIngresado.includes("ufat")) {
            do {

                mensajeIngresado = mensajeIngresado.replace("enter", "e");
                mensajeIngresado = mensajeIngresado.replace("imes", "i");
                mensajeIngresado = mensajeIngresado.replace("ai", "a");
                mensajeIngresado = mensajeIngresado.replace("ober", "o");
                mensajeIngresado = mensajeIngresado.replace("ufat", "u");

            } while (mensajeIngresado.includes("enter") || mensajeIngresado.includes("imes") || mensajeIngresado.includes("ai") || mensajeIngresado.includes("ober") || mensajeIngresado.includes("ufat"));

        }
        document.getElementById("mensaje_encode").value = mensajeIngresado;

    }




}

function reset() {
    document.getElementById("mensaje_ingresado").value = "";
    document.getElementById("mensaje_encode").value = "";
    document.getElementById("campo_resultado").hidden = true;
}