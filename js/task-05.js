const inputEl = document.querySelector('#name-input')
const outputSpanEl = document.querySelector('#name-output')

const onInputName = (event) => {
   outputSpanEl.textContent = event.currentTarget.value || 'незнакомец';
}

inputEl.addEventListener('input', onInputName);
