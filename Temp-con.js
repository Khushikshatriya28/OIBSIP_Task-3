var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue, resultTypeValue;

input.addEventListener('keyup', myResult)
inputType.addEventListener('change', myResult)
resultType.addEventListener('change', myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult() {
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    if (inputTypeValue === 'fahrenheit' && resultTypeValue === 'celsius') {
        result.value = (Number(input.value) - 32) * 0.555
    } else if (inputTypeValue === 'fahrenheit' && resultTypeValue === 'kelvin') {
        result.value = (Number(input.value) - 32) * 0.555 + 273.5
    } else if (inputTypeValue === 'fahrenheit' && resultTypeValue === 'fahrenheit') {
        result.value = input.value
    }

    if (inputTypeValue === 'celsius' && resultTypeValue === 'fahrenheit') {
        result.value = (Number(input.value) * 1.8) + 32
    } else if (inputTypeValue === 'celsius' && resultTypeValue === 'kelvin') {
        result.value = Number(input.value) + 273.15
    } else if (inputTypeValue === 'celsius' && resultTypeValue === 'celsius') {
        result.value = input.value
    }

    if (inputTypeValue === 'kelvin' && resultTypeValue === 'fahrenheit') {
        result.value = (Number(input.value) - 273.15) * 1.8 + 32
    } else if (inputTypeValue === 'kelvin' && resultTypeValue === 'celsius') {
        result.value = (Number(input.value) - 273.15)
    } else if (inputTypeValue === 'kelvin' && resultTypeValue === 'kelvin') {
        result.value = input.value
    }
}