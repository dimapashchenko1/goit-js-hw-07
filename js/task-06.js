const inputEl = document.querySelector('#validation-input');

const dataLength = Number(inputEl.dataset.length);


function Valid() {
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')
}

function inValid() {
    inputEl.classList.add('invalid')
    inputEl.classList.remove('valid')
}

const onFocusChange = (event) => {
    if (dataLength === event.currentTarget.value.length) {
        Valid();
    } else {
        inValid();
    }
    
}

inputEl.addEventListener('blur', onFocusChange);

