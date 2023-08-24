const submit = document.querySelector('button')

submit.addEventListener('click', function() {

    let userName = document.getElementById('name').value;
    let km = document.getElementById('km_todo').value;
    console.log(userName, km);

    let price = (km * 0.21)
    console.log(price);

    let ageRange = document.getElementById('age').value;
    console.log(ageRange);

    if (ageRange === 'Minorenne') {

        price = Number(price * 0.8)
        console.log(price.toFixed(2));
    
    } else if (ageRange === 'Over_65') {
        
        price = Number(price * 0.6)
        console.log(price.toFixed(2));
        
    }  else if (ageRange === 'no_sale') {

        console.log(price.toFixed(2));

    }

})



