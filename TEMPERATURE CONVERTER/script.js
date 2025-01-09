const temperatureInput = document.getElementById('temperature');
const unitDropdown = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const outputDiv = document.getElementById('output');

convertButton.addEventListener('click', () => {
    const tempValue = parseFloat(temperatureInput.value);
    const unit = unitDropdown.value;

    if (isNaN(tempValue)) {
        outputDiv.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemp;

    if (unit === 'C') {
        convertedTemp = `${(tempValue * 9/5 + 32).toFixed(2)} °F, ${(tempValue + 273.15).toFixed(2)} K`;
    } else if (unit === 'F') {
        convertedTemp = `${((tempValue - 32) * 5/9).toFixed(2)} °C, ${((tempValue - 32) * 5/9 + 273.15).toFixed(2)} K`;
    } else if (unit === 'K') {
        convertedTemp = `${(tempValue - 273.15).toFixed(2)} °C, ${((tempValue - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }

    outputDiv.textContent = `Converted Temperature: ${convertedTemp}`;
});
