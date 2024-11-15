const cardNameInput = document.querySelector('#name');
const cardNumberInput = document.querySelector('#Number');
const cardYearInput = document.querySelector('#YY');
const cardMonthInput = document.querySelector('#MM');
const cardCvcInput = document.querySelector('#cvc');
const submitBtn = document.querySelector('button');
const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.card-name');
const cardMonth = document.querySelector('#Month');
const cardYear = document.querySelector('#Year');
const cardCvc = document.querySelector('.card-cvc');

submitBtn.addEventListener('click', () => {
  const CardInfo = {
    name: cardNameInput.value,
    number: cardNumberInput.value,
    month: cardMonthInput.value,
    year: cardYearInput.value,
    cvc: cardCvcInput.value,
  };
  function changeCardInfo() {
    cardName.innerHTML = CardInfo.name;
    cardNumber.innerHTML = CardInfo.number;
    cardMonth.innerHTML = CardInfo.month;
    cardYear.innerHTML = CardInfo.year;
    cardCvc.innerHTML = CardInfo.cvc;
  }
  changeCardInfo();
  function resetCardInfo() {
    CardInfo.name = '';
    CardInfo.number = '';
    CardInfo.month = '';
    CardInfo.year = '';
    CardInfo.cvc = '';
  }
  resetCardInfo();
});
