// get input value
const getInputValue = () => {
    // principal field
    const principalField = document.getElementById('principal-input').value;
    // time field
    const timeField = document.getElementById('time-input').value;
    // rate field
    const rateField = document.getElementById('rate-input').value;
    // call function
    calculate(principalField, timeField, rateField);
}
// calculate
const calculate = (principalField, timeField, rateField) => {
    // principal
    const principal = parseFloat(principalField);
    // time
    const time = parseFloat(timeField);
    // rate
    const rate = parseFloat(rateField);
    // rate of interest
    const rateOfInterest = rate / 100;
    // interest
    const interest = principal * time * rateOfInterest;
    // total amount
    const totalAmount = interest + principal;
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
    // principal field
    const principalField = document.getElementById('principal-input').value;
    // time field
    const timeField = document.getElementById('time-input').value;
    // rate field
    const rateField = document.getElementById('rate-input').value;
    // if / else
    if (principalField == '' || timeField == '' || rateField == '' || isNaN(principalField) |isNaN(timeField) 
        || isNaN(rateField) || principalField <= 0 || timeField <= 0 || rateField <= 0) {
        // alert
        alert('Please enter positive number');
    } 
    else {
        // call function
        getInputValue();
    }
})