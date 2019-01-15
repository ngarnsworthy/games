var startMoney = 0

var plaerOne = startMoney
var plaerTwo = startMoney
var plaerThree = startMoney
var plaerFour = startMoney
var MortgageRate
var tax

// getElement shortcut
// returns the element
function ge(id) {
  return document.getElementById(id);
}

function start() {
  startMoney = ge("idStartAcountAmount").value - 0
  plaerOne = startMoney
  plaerTwo = startMoney
  plaerThree = startMoney
  plaerFour = startMoney
  MortgageRate = ge('idMortgageRate').value - 0
  tax = ge('idTax').value - 0
  swichAndReset()
}


function swichAndReset() {

 game-one
  ge('idPlayerOneDiv').innerHTML = plaerOne;
  ge('idPlayerTwoDiv').innerHTML = plaerTwo;
  ge('idPlayerThreeDiv').innerHTML = plaerThree;
  ge('idPlayerFourDiv').innerHTML = plaerFour;

game-one
  ge('idMortgageRateDiv').innerHTML = MortgageRate;
  ge('idTaxDiv').innerHTML = tax;

}

function changeValue(id) {
  var value = ge('idPlayerChange').value-0;
  ge('id' + id + 'Div').innerHTML = value;
}
