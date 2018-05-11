jQuery(function($){
  var launch= new Date("May 14, 2018 15:30:00");

  //variables qui permettent de stoquer l'élément concernant...:

  var days=$ ('#days');
  var hours=$ ('#hours');
  var minutes=$ ('#minutes');
  var seconds=$ ('#seconds');
  var start=document.getElementById("play");
  var pause=document.getElementById("stop");

  // compter chaque seconde
  var t = setInterval(setDate,1000);

function setDate(){ // calcule et affiche la distance entre la date demandée et celle d'aujourd'hui
  var now= new Date();
  var s=(launch.getTime() -now.getTime())/1000; //getTime récupère le temps ici en millisecondes


  var j=Math.floor(s/86400);
days.html('<strong>'+j+'</strong>Day'+ (j>1?'s':'')); // ?= if; :=else (autre façon de l'écrire)
s-=j*86400; //soustraction des secondes s-= équivaut s=s-...

  var h=Math.floor(s/3600);
  hours.html('<strong>'+h+'</strong>Hour'+ (h>1?'s':''));
s-=h*3600;

  var m=Math.floor(s/60);
minutes.html('<strong>'+m+'</strong>Minute'+ (m>1?'s':''));
s-=m*60;

  var s=Math.floor(s);
seconds.html('<strong>'+s+'</strong>Second'+ (s>1?'s':''));

  console.log(now.toLocaleString());
}

pause.onclick = function() {
    clearInterval(t);
  } // pour que lorsque j'appuie sur bouton stop mon Compte à rebours s'arrête
  start.onclick = function() {
      t=setInterval(setDate,1000);

    }// pour que lorsque j'appuie sur bouton play mon Compte à rebours reprend

});
