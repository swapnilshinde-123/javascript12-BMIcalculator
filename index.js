
const form = document.querySelector('form');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const weight =parseInt(document.querySelector('#weight').value);
    const height =parseInt(document.querySelector('#height').value);
    const results =document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`;
    }else{
       const bmi= (weight / ((height*height)/10000).toFixed(2));
       if(bmi <18.6){
        results.innerHTML =`<span>${bmi}</span>
        <P>under weight</P>`
       }if(bmi >18.6){
        results.innerHTML =`<span>${bmi}</span>
        <P>normal weight</P>`
       }if(bmi >24.9){
        results.innerHTML =`<span>${bmi}</span>
        <P>over weight</P>`
       }
       
    }

});
