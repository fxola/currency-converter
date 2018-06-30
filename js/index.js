const button = document.getElementsByClassName('button')[0];

const from = document.getElementById('select-from');

const to = document.getElementById('select-to');

const amount = document.getElementById('amount');

let fragment = document.createDocumentFragment();

const board = document.getElementsByClassName('exchange')[0];

const rateBoard = document.getElementsByClassName('exchange-rate')[0];


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
    rateBoard.textContent = 'Loading Exchange Rate...';
    board.textContent = 'Converting...';
    convertFrom = from.value;

    convertTo = to.value;

    fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${convertFrom}_${convertTo}&compact=y`).then(function(data){

        return data.json();

    }).then( (data) =>
    {

        let query = `${convertFrom}_${convertTo}`;

        let exchangeValue = data[query].val;

        let rate =  `1 ${convertFrom} = ${exchangeValue} ${convertTo}`;

        let exchangeAmount = amount.value;

        let exchangeRate = exchangeAmount*exchangeValue;

        exchangeRate = exchangeRate.toLocaleString('en');

        rateBoard.textContent = rate;

        board.textContent = `${exchangeRate} ${convertTo}`;

    }).catch( (err)=>
    
    {
        board.textContent = 'Please Try Again';
        console.log(err);
    });

});