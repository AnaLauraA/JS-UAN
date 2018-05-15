function calcula() {
 var j, c1,c2, r;
 
j = parseFloat(document.getElementById("j").value);
c1= parseFloat(document.getElementById("c1").value);
c2 = parseFloat(document.getElementById("c2").value);

r
r = j - (c1- c1*2/100) - (c2 - c2*2/100)
document.getElementById("r").innerHTML = r;
}