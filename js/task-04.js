const valueEL = document.querySelector('#value')
const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')

let counterValue = 0;
valueEL.textContent = counterValue;

const increment = () => {
    counterValue+=1;
    valueEL.textContent = counterValue;
}

const decrement = () => {
    counterValue-=1;
    valueEL.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);