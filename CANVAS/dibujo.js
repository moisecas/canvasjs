var d = document.getElementById("dibujo1");
var lienzo = d.getContext("2d");
var lineas = 30; 
var l = 0; 
var yi, xf; 
var colororcito = "pink";  


for(l = 0; l < lineas; l++) { 

   yi = 10 * 1;
   xf = 10 * (l + 1);
   dibujarLinea(colororcito,0,yi,xf,300);
   console.log ("linea " + 1 ); 
   
}

dibujarLinea(colororcito, 1,1,1,300);
dibujarLinea(colororcito, 1,299,299,299);


function dibujarLinea(color,xinicial,yinicial,xfinal, yfinal)
{

  lienzo.beginPath(); 
  lienzo.strokeStyle = color; 
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal); 
  lienzo.stroke();
  lienzo.closePath();

}  
  




