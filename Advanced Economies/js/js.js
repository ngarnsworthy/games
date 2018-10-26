var startMoney = 0

var plaerOne = startMoney,
    plaerTwo = startMoney,
    plaerThree = startMoney,
    plaerFour = startMoney,
    MortgageRate

function start() {
  MortgageRate = document.getElementById('idMortgageRate').value - 0
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
  document.getElementById('idMortgageRateDiv').innerHTML = MortgageRate;
}
