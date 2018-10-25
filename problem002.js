function stringRotate(a, b) {
  
  if (b>=0) {
    var zapis='';
    var wynik='';
      
      for(var i=0; i<b;i++){
      zapis = zapis+a[i];
      }
    
      for(var i=0; i<(a.length-b);i++){
        wynik = wynik + a[i+b];
        
      }
    wynik = wynik + zapis;
    return wynik;
    
  }
  else if (typeof(b)!='number') return '';
  else return '';
  
  
}