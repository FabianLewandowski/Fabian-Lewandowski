function triangleArea(a, b, c) {
  
  var wynik = 0;
   
  if (a<=0 || b<=0 || c<=0) return -1;
  if (a+b<=c || a+c<=b || c+b<=a) return -1;
  
  wynik = Math.sqrt((a+b+c)*(a+b-c)*(a-b+c)*(-a+b+c))/4;
  wynik = Math.round(wynik * 100) / 100;
  
 
 
  if (wynik <= 0) {return -1;}
  else if (isNaN(wynik)==true) {return -1;}
  else {return wynik;}
  
}