function calcula() {
    var salarioFixo, valorVendas;
    salarioFixo = parseFloat(document.getElementById("salarioFixo").value);
    valorVendas = parseFloat(document.getElementById("valorVendas").value);
    comissao = valorVendas * 0.04;
    salarioFinal = salarioFixo + comissao
    document.getElementById("comissao").innerHTML = comissao + " reais";
    document.getElementById("salarioFinal").innerHTML = salarioFinal + " reais";
}
