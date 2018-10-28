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

  ge('plaerOne').innerHTML = plaerOne;
  ge('plaerTwo').innerHTML = plaerTwo;
  ge('plaerThree').innerHTML = plaerThree;
  ge('plaerFour').innerHTML = plaerFour;
  ge('idMortgageRateDiv').innerHTML = MortgageRate;
  ge('idTaxDiv').innerHTML = tax;

}

function changeValue(id) {
  var value = ge('id'+id+'Change').value-0;
  ge('id' + id + 'Div').innerHTML = value;
}
