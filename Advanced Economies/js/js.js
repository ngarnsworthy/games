var startMoney = 0

var plaerOne = startMoney
var plaerTwo = startMoney
var plaerThree = startMoney
var plaerFour = startMoney
var MortgageRate
var tax

function start() {
  startMoney = document.getElementById("idStartAcountAmount").value - 0
  plaerOne = startMoney
  plaerTwo = startMoney
  plaerThree = startMoney
  plaerFour = startMoney
  MortgageRate = document.getElementById('idMortgageRate').value - 0
  tax = document.getElementById('idTax').value - 0
  swichAndReset()
}


function swichAndReset() {

  document.getElementById('plaerOne').innerHTML = plaerOne;
  document.getElementById('plaerTwo').innerHTML = plaerTwo;
  document.getElementById('plaerThree').innerHTML = plaerThree;
  document.getElementById('plaerFour').innerHTML = plaerFour;
  document.getElementById('idMortgageRateDiv').innerHTML = MortgageRate;
  document.getElementById('idTaxDiv').innerHTML = tax;

}
