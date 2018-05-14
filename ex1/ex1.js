function calcula() {
  var  n1,n2,r1;
n1 = parseFloat(document.getElementById("n1").value);
n2 = parseFloat(document.getElementById("n2").value);

r1= n1 - n2;
document.getElementById("r1").innerHTML = n1 +  " - " + n2 + " = " + r1 ; 
} 