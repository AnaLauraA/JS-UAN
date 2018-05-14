function calcula() {
    var num1, num2, num3, resposta;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    num3 = parseFloat(document.getElementById("num3").value);
    resposta = num1 * num2 * num3;
    document.getElementById("resposta").innerHTML = num1 + " * " + num2 + " * " + num3 + " = " + resposta;
}
