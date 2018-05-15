function calcula() {
    var anoNasc, idade;

    anoNasc = parseFloat(document.getElementById("anoNasc").value);
    idadeAnos = 2018 - anoNasc;
    document.getElementById("idadeAnos").innerHTML = idadeAnos + " anos";
    document.getElementById("idadeMeses").innerHTML = idadeAnos*12 + " meses";
    document.getElementById("idadeDias").innerHTML = idadeAnos*365 + " dias";
    document.getElementById("idadeSemanas").innerHTML = (idadeAnos*365/7).toFixed(1) + " semanas";
}
