const price = document.querySelector("#price");
const persons = document.querySelector("#persons");
const tip = document.querySelector("select");
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost');


const calculate = () => {
    let tipValue = Number(tip.value);
    let priceValue = Number(price.value);
    let personValue = Number(persons.value);
    const sum = (priceValue + (priceValue * tipValue)) / personValue
    console.log('price', price.value);
    console.log('tip', tip.value);
    console.log(persons.value);
    costInfo.style.display = 'block'
    cost.textContent = sum.toFixed(2)
    error.textContent = ''
}
const handleCalculate = (e) => {
    if (Number(price.value) !== 0 && Number(persons.value) !== 0 && Number(tip.value) !== 0) {
        calculate();


    } else {
        error.textContent = 'Uzupełnij wszystkie pola!'

    }
}


countBtn.addEventListener('click', handleCalculate);