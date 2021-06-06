const inputEl = document.querySelector('#validation-input');

const dataLength = Number(inputEl.dataset.length);


const onFocusChange = (event) => {
    if (dataLength === event.currentTarget.value.length) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
    
}

inputEl.addEventListener('blur', onFocusChange);
