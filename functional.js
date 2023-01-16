// get input 
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = ''
    return value;

}
// balance compare and others

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

// update total value 
function updateTotal(fieldId, amount) {
    const prevousTotal = getInnerTextValue(fieldId)
    const newTotal = prevousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal
}

// update balance 
function updateBalance(amount, isAdd) {
    const previousBalance = getInnerTextValue('balance-total')
    let newBalance;
    if (isAdd == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;

    }

    document.getElementById('balance-total').innerText = newBalance;

}


// handle diposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    //  update diposite
    // update diposite and balacne 
    if (amount > 0) {
        updateTotal('deposit-total', amount);

        updateBalance(amount, true)
    }
    else {
        alert('please enter your positive amout')
    }

})

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    // update withdraw
    // update withdraw with balance

    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount)

        updateBalance(amount, false)

    }
    else {
        alert("you don't have sufficient balance")
    }
})