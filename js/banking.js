//get input function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const newInputAmount = inputField.value;

    //clearing deposit field
    inputField.value = '';

    return newInputAmount;
}

//update withdraw and deposit
function updateTotalField(totalFieldId, updateAmount) {
    //get previous deposit
    const totalAmount = document.getElementById(totalFieldId);

    //setting the current total deposit
    totalAmount.innerText = parseFloat(updateAmount) + parseFloat(totalAmount.innerText);
}


//update balance
function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(newAmount) + parseFloat(balanceTotal.innerText);
    } else {
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(newAmount);
    }
}


//deposit function
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');

    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');

    if (newWithdrawAmount > 0 && newWithdrawAmount <= parseFloat(document.getElementById('balance-total').innerText)) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
});