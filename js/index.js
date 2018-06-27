const button = document.getElementsByClassName('button')[0];

const from = document.getElementById('select-from');

const to = document.getElementById('select-to');

const amount = document.getElementById('amount');

let fragment = document.createDocumentFragment();

const board = document.getElementsByClassName('display-board')[0];

const populateDropdown =  (data) => 
{
    const countryInfo = data.results;

    for(const[key,value] of Object.entries( countryInfo ) )
    {

        let option = document.createElement('option');

        option.value = `${value.currencyId}`;

        option.textContent = `${value.currencyName} (${value.currencySymbol})`;

        fragment.appendChild(option);  
    }

    from.appendChild(fragment);
}

const populateDropdown2 =  (data) => 
{
    const countryInfo = data.results;

    for( const[key,value] of Object.entries(countryInfo) )
    {

        let option = document.createElement('option'); 

        option.value = `${value.currencyId}`;

        option.textContent = `${value.currencyName} (${value.currencySymbol})`;

        fragment.appendChild(option);  
    }

    to.appendChild(fragment);
}

fetch('https://free.currencyconverterapi.com/api/v5/countries').then( (data) =>
{

    let response2 = data.clone();

    data.json().then(populateDropdown);

    response2.json().then(populateDropdown2);
});

button.addEventListener('click', (e) =>
{

    e.preventDefault();

    convertFrom = from.value;

    convertTo = to.value;

    fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${convertFrom}_${convertTo}&compact=y`).then(function(data){

        return data.json();

    }).then(function(data){

        let query = `${convertFrom}_${convertTo}`;

        let exchangeValue = data[query].val;

        let exchangeAmount = amount.value;
        // console.log(exchangeAmount);
        let exchangeRate = exchangeAmount*exchangeValue;
        board.textContent = exchangeRate;

    }).catch(function(err){

        console.log(err);
    });

});