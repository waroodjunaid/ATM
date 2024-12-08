let currentBalance = 10000; // Initial balance

function validatePin() {
  const pin = document.getElementById('pinInput').value;

  if (pin === '1234') { // Assume '1234' is the correct PIN
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  } else {
    alert('Invalid PIN. Please try again.');
  }
}

function withdrawAmount() {
  const amount = parseInt(document.getElementById('amountSelect').value, 10);

  if (amount > currentBalance) {
    alert('Insufficient balance! Please select a smaller amount.');
  } else {
    currentBalance -= amount; // Deduct the selected amount from the current balance
    document.getElementById('step2').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultMessage').innerText = 'Transaction successful! You have withdrawn ₹${amount}.';
    document.getElementById('remainingBalance').innerText = currentBalance;
  }
}

function resetATM() {
  document.getElementById('pinInput').value = '';
  document.getElementById('step1').style.display = 'block';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('currentBalance').innerText = currentBalance;
}