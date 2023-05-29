const apiKey = "102cc752389f5e4391147bfa";

const fromCurrencyInput = document.getElementById("fromCurrency");
const toCurrencyInput = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

async function fetchCurrencies() {
  const url = `https://v6.exchangeratesapi.io/latest?access_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return Object.keys(data.rates);
  } catch (error) {
    throw new Error("An error occurred while fetching currencies.");
  }
}

async function fetchConversionRate(fromCurrency, toCurrency, amount) {
  const url = `https://v6.exchangeratesapi.io/convert?access_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error("An error occurred while fetching conversion rate.");
  }
}

function convertCurrency() {
  const fromCurrency = fromCurrencyInput.value.toUpperCase();
  const toCurrency = toCurrencyInput.value.toUpperCase();
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount)) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  fetchConversionRate(fromCurrency, toCurrency, amount)
    .then((convertedAmount) => {
      resultDiv.textContent = `${amount.toFixed(
        2
      )} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    })
    .catch((error) => {
      resultDiv.textContent = "An error occurred while converting currencies.";
      console.log(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCurrencies()
    .then((currencies) => {
      fromCurrencyInput.innerHTML = generateOptions(currencies);
      toCurrencyInput.innerHTML = generateOptions(currencies);
    })
    .catch((error) => {
      resultDiv.textContent = "An error occurred while fetching currencies.";
      console.log(error);
    });

  convertBtn.addEventListener("click", convertCurrency);
});

function generateOptions(currencies) {
  return currencies
    .map((currency) => `<option value="${currency}">${currency}</option>`)
    .join("");
}
