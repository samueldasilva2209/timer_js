let n = 0;
let aumenta = () => {
  n += 60;
  document.getElementById("number").innerHTML = n + "sec";
};
let diminui = () => {
  n -= 60;
  document.getElementById("number").innerHTML = n + "sec";
};

function sub() {
  n--;

  document.getElementById("number").innerHTML = n + "sec";
}
function comeca() {
  let a = setInterval(sub, 1000);

  let bot = document.querySelector("#comeca");
  bot.disabled = true; // desativando o botão
}

function parar() {
  location.reload();
}
