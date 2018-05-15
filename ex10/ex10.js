function calcula() {
    var ladoq, areaq;
    ladoq = parseFloat(document.getElementById("ladoq").value);
    areaq = Math.pow(ladoq, 2)
    document.getElementById("areaq").innerHTML = areaq;
}
