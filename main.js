document.querySelector('button').addEventListener('click',tipCalculation)

function tipCalculation(){

const billCost = parseInt(document.querySelector(".billAmount").value);
const decimalTipPercentage = parseInt(document.querySelector(".tipAmount").value) / 100;
const tipAmount = decimalTipPercentage * billCost;
const totalBillCost =  tipAmount + billCost;

document.querySelector('.totalAmount').innerText = totalBillCost;






}
