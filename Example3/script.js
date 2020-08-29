const api = "https://api.exchangeratesapi.io/latest"; // We take data from our url


//We take our html components here
const cur1 = document.getElementById('selectCurrency');
const cur2 = document.getElementById('selectCurrencytwo');
const amount = document.getElementById('amount');
const btn = document.getElementById('button');
const result = document.getElementById('result');


// We need to fetch usd and dolar and split them here
fetch('./currency.json').then(res=>res.json()) // We take values in our currency json 
.then(data=>{
    const keys = Object.keys(data); // there we split them USD and dolar
    const values = Object.values(data);
    
    let options;

    for(let i  = 0;i<keys.length;i++){
        options += `<option value = ${keys[i]}>${values[i]}</option>`; // here we add every currency in our select component
    }

    cur1.innerHTML += options;
    cur2.innerHTML += options;

});


//Here we do the important thing which is this program how to work
btn.addEventListener('click',()=>{
    const basecurr = cur1.value;
    const curchange = cur2.value;
    const amouunt = amount.value;

    fetch(`${api}?base=${basecurr}`)
    .then(res => res.json()) // here we take data from json but url json
    .then(data => {
        const rate = data.rates[curchange]; // here we give rates to data array and take rate 
        result.innerHTML = `${amouunt} ${basecurr} = ${amouunt*rate} ${curchange}`; // here we print our result to result textfield

    });
    
});