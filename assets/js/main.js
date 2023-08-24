const submit = document.querySelector('button')

submit.addEventListener('click', function() {

    let userName = document.getElementById('name').value;
    let km = document.getElementById('km_todo').value;
    console.log(userName, km);
    document.getElementById('passenger_name').innerHTML = userName

    let price = (km * 0.21)
    console.log(price);

    let ageRange = document.getElementById('age').value;
    console.log(ageRange);

    if (ageRange === 'Minorenne') {

        price = Number(price * 0.8)
        console.log(price.toFixed(2));
        document.getElementById('cost').innerHTML = price.toFixed(2) + '€'
        document.getElementById('offer').innerHTML = 'Sconto del 20%'
    
    } else if (ageRange === 'Over_65') {
        
        price = Number(price * 0.6)
        console.log(price.toFixed(2));
        document.getElementById('cost').innerHTML = price.toFixed(2) + '€'
        document.getElementById('offer').innerHTML = 'Sconto del 40%'
        
    }  else if (ageRange === 'no_sale') {

        console.log(price.toFixed(2));
        document.getElementById('cost').innerHTML = price.toFixed(2) + '€'
        document.getElementById('offer').innerHTML = 'Biglietto Standard'

    }

    let wagonDom = Math.ceil(Math.random() * 30) + 1;
    document.getElementById('wagon').innerHTML = wagonDom;
    
    
    let codeDom = Math.ceil(Math.random() * 50000);
    document.getElementById('code').innerHTML = codeDom;

})



