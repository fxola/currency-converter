const button = document.getElementsByClassName('button')[0];
const from = document.getElementById('select-from');
const to = document.getElementById('select-to');
let fragment = document.createDocumentFragment();

const populateDropdown = function (data){
    const countryInfo = data.results;
    for(const[key,value] of Object.entries(countryInfo)){
        let option = document.createElement('option');    
        option.textContent = `${key}`;
        fragment.appendChild(option);   
        // console.log(fragment);
        // console.log(`${key} ${value.currencyName}`);
    }
    to.appendChild(fragment);
    from.appendChild(fragment);
}
fetch('https://free.currencyconverterapi.com/api/v5/countries').then(function(data){
   return (data.json())
}).then(populateDropdown);

button.addEventListener('click', function(e){
    e.preventDefault();

})