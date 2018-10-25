function getTotalNumberOfNewYaersEveSundays(a, b) {
  
  var wynik = 0;
   
  
 for(a;a<=b;a++){
   var data = new Date(a,0,1);
   var spr = data.getDay();
   
   if(spr == 0){wynik++;}
   
   
 }
  return wynik;
}