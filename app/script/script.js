const cardNameInput = document.querySelector('#name');
const cardNumberInput = document.querySelector('#number');
const cardYearInput = document.querySelector('#yy');
const cardMonthInput = document.querySelector('#mm');
const cardCvcInput = document.querySelector('#cvc');
const submitBtn = document.querySelector('button');

const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.card-name');
const cardMonth = document.querySelector('#month');
const cardYear = document.querySelector('#year');
const cardCvc = document.querySelector('.card-cvc');
const btn = document.querySelectorAll('.btn');
const wrongMsg = document.querySelectorAll('.wrong-msg');
const input = document.querySelectorAll('input');

const confirm = document.querySelector('.confirm');
const complete = document.querySelector('.complete');
const continuee = document.querySelector('.continue');

submitBtn.addEventListener('click', (e) => {
  if (
    cardNameInput.value.trim() === '' ||
    cardNumberInput.value.trim() === '' ||
    cardMonthInput.value.trim() === '' ||
    cardYearInput.value.trim() === '' ||
    cardCvcInput.value.trim() === ''
  ) {
    InputValueValidation();
    e.preventDefault();
  } else {
    InputValueValidation();
    updateCardValue();
    showMessage();
  }
});

continuee.addEventListener('click', () => {
  resetAll();
});
function updateCardValue() {
  cardName.textContent = cardNameInput.value;
  cardNumber.textContent = cardNumberInput.value;
  cardMonth.textContent = cardMonthInput.value;
  cardYear.textContent = cardYearInput.value;
  cardCvc.textContent = cardCvcInput.value;
}

function InputValueValidation() {
  input.forEach((ele, index) => {
    if (ele.value.trim() === '') {
      ele.classList.add('red');
      wrongMsg[index].classList.add('d-flex');
    } else {
      ele.classList.remove('red');
      wrongMsg[index].classList.remove('d-flex');
      wrongMsg[index].classList.add('d-none');
    }
  });
}

function showMessage() {
  complete.classList.add('d-flex');
  confirm.classList.add('d-none');
}

function resetAll() {
  cardName.textContent = 'Jane Appleseed';
  cardNumber.textContent = '0000 0000 0000 0000';
  cardMonth.textContent = '00';
  cardYear.textContent = '00';
  cardCvc.textContent = '000';
  cardNameInput.value = '';
  cardNumberInput.value = '';
  cardMonthInput.value = '';
  cardYearInput.value = '';
  cardCvcInput.value = '';
  complete.classList.remove('d-flex');
  complete.classList.add('d-none');
  confirm.classList.remove('d-none');
}
