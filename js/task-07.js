const controlSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const onSizeChange = (event) => {
    const size = event.currentTarget.value;
    textEl.style.fontSize = `${size}px`;
    // console.log(size);
}

controlSizeEl.addEventListener('input', onSizeChange);