var startMoney = 0

var plaerOne = startMoney
var plaerTwo = startMoney
var plaerThree = startMoney
var plaerFour = startMoney

function start() {
  startMoney = document.getElementById("idStartAcountAmount").value - 0
  plaerOne = startMoney
  plaerTwo = startMoney
  plaerThree = startMoney
  plaerFour = startMoney
  swichAndReset()
}


function swichAndReset() {
  document.getElementById('plaerOne').innerHTML = plaerOne;
  document.getElementById('plaerTwo').innerHTML = plaerTwo;
  document.getElementById('plaerThree').innerHTML = plaerThree;
  document.getElementById('plaerFour').innerHTML = plaerFour;
}
