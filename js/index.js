const button = document.getElementsByClassName('button')[0];
const from = document.getElementById('select-from');
const to = document.getElementById('select-to');
let fragment = document.createDocumentFragment();

const populateDropdown =  (data) => {
    const countryInfo = data.results;
    for(const[key,value] of Object.entries(countryInfo)){
        let option = document.createElement('option');    
        option.textContent = `${key}`;
        fragment.appendChild(option);  
    }
    from.appendChild(fragment);
}

const populateDropdown2 =  (data) => {
    const countryInfo = data.results;
    for(const[key,value] of Object.entries(countryInfo)){
        let option = document.createElement('option');    
        option.textContent = `${key}`;
        fragment.appendChild(option);  
    }
    to.appendChild(fragment);
}

fetch('https://free.currencyconverterapi.com/api/v5/countries').then(function(data){
    let response2 = data.clone();
    data.json().then(populateDropdown);
    response2.json().then(populateDropdown2);
});

button.addEventListener('click', function(e){
    e.preventDefault();

})