function calcula() {
    var pesoKg, pesoEmGramas, resultado;
    pesoKg = parseFloat(document.getElementById("pesoKg").value);
    pesoEmGramas = pesoKg * 1000;
    document.getElementById("resultado").innerHTML = pesoEmGramas + "g";
}
