function convertToZazy() {
    const kgInput = document.getElementById('kgInput').value;
    const zazyValue = (kgInput / 37).toFixed(2);
    document.getElementById('result').textContent = `${kgInput} kilograms is equal to ${zazyValue} ZAZY`;
}
