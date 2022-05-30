function calculateBMI (){
    const result = document.querySelector('.result');
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / ((height/100)**2));

    let robert = `<a class="wiki" href="https://en.wikipedia.org/wiki/Robert_Wadlow" target="_blank" rel="external">Robert Pershing Wadlow</a>`;
    let chandra = `<a class="wiki" href="https://en.wikipedia.org/wiki/Chandra_Bahadur_Dangi" target="_blank" rel="external">Chandra Bahadur Dangi</a>`;
    let manuel = `<a class="wiki" href="https://en.wikipedia.org/wiki/Manuel_Uribe" target="_blank" rel="external">Manuel Uribe</a>`;
    let lucia = `<a class="wiki" href="https://en.wikipedia.org/wiki/Luc%C3%ADa_Z%C3%A1rate" target="_blank" rel="external">Lucía Zárate</a>`;

    let tallest = `The tallest person in the world was ${robert} measuring 272 centimeters`; // https://en.wikipedia.org/wiki/Robert_Wadlow
    let shortest = `The shortest person in the world was ${chandra} measuring 54.6 centimeters`; // https://en.wikipedia.org/wiki/Chandra_Bahadur_Dangi
    let heavier = `The person who weighed the most in the world was ${manuel} weighing 597 kilograms`; // https://en.wikipedia.org/wiki/Manuel_Uribe
    let lightest = `The lightest person in the world was ${lucia} weighing 2.1 kilograms`; // https://en.wikipedia.org/wiki/Luc%C3%ADa_Z%C3%A1rate

    if (height === 0) {
        result.innerHTML = `<span class="error">Please insert a number above 0 for height</span>`;
    } else if (weight === 0) {
        result.innerHTML = `<span class="error">Please insert a number above 0 for weight</span>`;
    } else if (height > 272) {
        result.innerHTML = `<span class="info">Please insert a valid height. ${tallest}</span>`;
    } else if (height < 54.6) {
        result.innerHTML = `<span class="info">Please insert a valid height. ${shortest}</span>`;
    } else if (weight > 597) {
        result.innerHTML = `<span class="info">Please insert a valid weight. ${heavier}</span>`;
    } else if (weight < 2.1) {
        result.innerHTML = `<span class="info">Please insert a valid weight. ${lightest}</span>`;
    } else if (height == undefined) {
        result.innerHTML = `<span class="error">Undefined height</span>`;
    } else if (weight == undefined) {
        result.innerHTML = `<span class="error">Undefined weight</span>`;
    } else if (isNaN(height)) {
        result.innerHTML = `<span class="error">Height is <abbr title="Not a Number">NaN</abbr></span>`;
    } else if (isNaN(weight)) {
        result.innerHTML = `<span class="error">Weight is <abbr title="Not a Number">NaN</abbr></span>`;
    } else if (height && weight) {
        if (16 > bmi) {
            result.innerHTML = `<span class="success">Your BMI is ${bmi.toFixed(2)} (Severe Thinness)</span>`;
        } else if (16 <= bmi.toFixed(2) && bmi.toFixed(2) <= 16.99) {
            result.innerHTML = `<span class="success">Your BMI is ${bmi.toFixed(2)} (Moderate Thinness)</span>`;
        }  else if (17 <= bmi.toFixed(2) && bmi.toFixed(2) <= 18.49) {
            result.innerHTML = `<span class="success">Your BMI is ${bmi.toFixed(2)} (Mild Thinness)</span>`;
        } else if (18.5 <= bmi.toFixed(2) && bmi.toFixed(2) <= 24.99) {
            result.innerHTML = `<span class="success">Your BMI is ${bmi.toFixed(2)} (Normal weight)</span>`;
        } else if (25 <= bmi.toFixed(2) && bmi.toFixed(2) <= 29.99) {
            result.innerHTML = `<span class="success">Your BMI is ${bmi.toFixed(2)} (Overweight)</span>`;
        } else if (30 <= bmi.toFixed(2) && bmi.toFixed(2) <= 34.99) {
            result.innerHTML = `<span class="success">Your BMI is ${bmi.toFixed(2)} (Obesity class I)</span>`;
        } else if (35 <= bmi.toFixed(2) && bmi.toFixed(2) <= 39.99) {
            result.innerHTML = `<span class="success">Your BMI is ${bmi.toFixed(2)} (Obesity class II)</span>`;
        } else if (40 <= bmi) {
            result.innerHTML = `<span class="success">Your BMI is ${bmi.toFixed(2)} (Obesity class III)</span>`;
        }
    } else {
        result.innerHTML = `<span class="error">INVALID</span>`;
    }
}

// Anonymous function for stop sending the form when click the button
const form = document.querySelector('#form');

form.addEventListener('submit', function (event){
    event.preventDefault();
});
