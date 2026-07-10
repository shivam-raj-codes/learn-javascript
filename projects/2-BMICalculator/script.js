const form = document.querySelector('form');
//const weight = parseInt(document.querySelector('#weight').value); // -> if we fetch value here, will get empty - value. BeCoZ form is not sumbitted yet


form.addEventListener('submit', function(e) {
    e.preventDefault();

    // now we want values (after submission)
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results'); // results is div not have value so no need of .value


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        //show bmi into result
        results.innerHTML = `<span>${bmi}</span><br>`;


    // ===== Assignment ====== 

    // to display its underweight/overweight/normal
    // as BMI - result store in bmi
    if(results < 18.6) {
        results.innerHTML = `<span>${bmi} is Under-Weight</span>`;  // replacing whole prvious innerHTML in 'result' , to make it whole in a line use:--> results.innerHTML += `<span>${bmi} is Under-Weight</span>`; 
    } 
    else if(results > 24.9) {
        results.innerHTML = `<span>${bmi} is Over-Weight</span>`;
    }
    else{
        results.innerHTML = `<span>${bmi} is Normal</span>`;
    }
    }
    
});