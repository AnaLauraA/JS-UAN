function calcula() {
    var salarioMin, salarioFunc, quantSalario;

    salarioMin = parseFloat(document.getElementById("salarioMin").value);
    salarioFunc = parseFloat(document.getElementById("salarioFunc").value);
    quantSalario = salarioFunc / salarioMin;

    document.getElementById("quantSalario").innerHTML = "Você recebe " + quantSalario + " salarios mínimos por mês";
}
