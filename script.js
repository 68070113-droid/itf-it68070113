let count = 0;
function updateBalance() {
    const accountValue = document.getElementById("accountBalance").value;
    const cashValue = document.getElementById("cashBalance").value;
    const historyBox = document.getElementById("history");

    count++;
    const message = `#${count} Current account balance: ${accountValue}, Current cash balance: ${cashValue}\n`;
    historyBox.value = message + historyBox.value;
    }

function processTransaction() {
  const operation = document.getElementById("operationType").value;
  const amount = parseFloat(document.getElementById("amountInput").value);
  const accountInput = document.getElementById("accountBalance");
  const cashInput = document.getElementById("cashBalance");
  const historyBox = document.getElementById("history");

  let accountBalance = parseFloat(accountInput.value);
  let cashBalance = parseFloat(cashInput.value);
  let message = "";

  if (operation === "deposit") {
    if (cashBalance < amount) {
      message = `#${++count} Couldn't deposit entered balance. (Insufficient cash balance)\n`;
    } else {
      accountBalance += amount;
      cashBalance -= amount;
      accountInput.value = accountBalance;
      cashInput.value = cashBalance;
      message = `#${++count} Current account balance: ${accountBalance}, Current cash balance: ${cashBalance}\n`;
    }
  } else if (operation === "withdraw") {
    if (accountBalance < amount) {
      message = `#${++count} Couldn't withdraw entered balance. (Insufficient account balance)\n`;
    } else {
      accountBalance -= amount;
      cashBalance += amount;
      accountInput.value = accountBalance;
      cashInput.value = cashBalance;
      message = `#${++count} Current account balance: ${accountBalance}, Current cash balance: ${cashBalance}\n`;
    }
  }
  if (message !== "") {
    historyBox.value = message + historyBox.value;
  }
}