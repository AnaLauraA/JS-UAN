function calcula () {
   var p, d, n; 

p = parseFloat(document.getElementById("p").value);
d = parseFloat(document.getElementById("d").value);


n = p*d/100;
np = p - n;
document.getElementById("np").innerHTML = np ;

}