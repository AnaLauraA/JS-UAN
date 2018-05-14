function calcula() {
    var num1, num2, num3, resposta;
    nota1 = parseFloat(document.getElementById("nota1").value);
    nota2 = parseFloat(document.getElementById("nota2").value);
    resposta = (nota1 * 2 + nota2 * 3)/5;
    document.getElementById("resposta").innerHTML = "A média das provas é " + resposta;
}
