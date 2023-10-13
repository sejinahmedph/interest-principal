// get input value
const getInputValue = () => {
    // profit field
    const profitField = document.getElementById('profit-input').value;
    // time field
    const timeField = document.getElementById('time-input').value;
    // rate field
    const rateField = document.getElementById('rate-input').value;
    // call function
    calculate(profitField, timeField, rateField)
}
// calculate
const calculate = (profitField, timeField, rateField) => {
    // profit
    const profit = parseFloat(profitField);
    // time
    const time = parseFloat(timeField);
    // rate
    const rate = parseFloat(rateField);
    // rate of interest
    const rateOfInterest = rate / 100;
    // interest
    const interest = profit * rateOfInterest * time;
    // total amount
    const totalAmount = interest + profit;
    // call function
    displayResult(interest, totalAmount);
}
// display result
const displayResult = (interest, totalAmount) => {
    // display interest
    const displayInterest = document.getElementById('display-interest');
    displayInterest.innerText = interest;
    // display total amount
    const displayTotalAmount = document.getElementById('display-total');
    displayTotalAmount.innerText = totalAmount;
}
// calculate-btn
document.getElementById('calculate-btn').addEventListener('click', function () {
    // profit field
    const profitField = document.getElementById('profit-input').value;
    // time field
    const timeField = document.getElementById('time-input').value;
    // rate field
    const rateField = document.getElementById('rate-input').value;
    // if / else
    if (profitField == '' || timeField == '' || rateField == '' || isNaN(profitField) |isNaN(timeField) 
        || isNaN(rateField) || profitField <= 0 || timeField <= 0 || rateField <= 0) {
        // alert
        alert('Please enter positive number');
    } 
    else {
        // call function
        getInputValue();
    }
})