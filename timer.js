


let n = 0;


let aumenta = () => {
  n += 60;
  document.getElementById("number").innerHTML = Math.round(n/60) + " min";
  document.querySelector('.minutos').innerHTML =n + ' sec';
  document.querySelector('.milesimos').innerHTML = n * 1000+'<br>milésimos'  ;
  
};
let diminui = () => {
  n -= 60;
  document.getElementById("number").innerHTML = Math.round(n/60) + " min";
  document.querySelector('.minutos').innerHTML =n + ' sec';
  document.querySelector('.milesimos').innerHTML = n * 1000+'<br>milésimos'  ;

};

function sub() {
  n--;

  document.getElementById("number").innerHTML = Math.round(n/60) + " min";
  document.querySelector('.minutos').innerHTML =n + ' sec';
  document.querySelector('.milesimos').innerHTML = n * 1000 +'<br>milésimos' ;
}
function comeca() {
  let a = setInterval(sub, 1000);

  let bot = document.querySelector("#comeca");
  bot.disabled = true; // desativando o botão
}

function parar() {
  location.reload();
}


  

 
