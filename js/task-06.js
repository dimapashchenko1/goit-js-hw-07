const inputEl = document.querySelector('#validation-input');

const dataLength = Number(inputEl.dataset.length);


function updateClass (addClass, remClass) {
    inputEl.classList.remove(remClass);
    inputEl.classList.add(addClass);
    }
    
    const onFocusChange = (event) => {
    if (dataLength === event.currentTarget.value.length) {
    updateClass ("valid","invalid")
    } else {
    updateClass ("invalid", "valid")
    }
    
    }

inputEl.addEventListener('blur', onFocusChange);

