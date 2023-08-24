const submit = document.querySelector('button')

submit.addEventListener('click', function() {

    let userName = document.getElementById('name').value;
    let km = document.getElementById('km_todo').value;
    console.log(userName, km);

    let price = (km * 0.21)
    console.log(price);

})






/* 
let price = (km * 0.21)
console.log(price);
document.getElementById('price').innerHTML = price + ' €'


if (age < 18) {

    price = Number(price * 0.8)
    document.getElementById('sales').innerHTML = (price.toFixed(2) + ' €')

} else if (age >= 65) {
    
    price = Number(price * 0.6)
    document.getElementById('sales').innerHTML = (price.toFixed(2) + ' €')
    
}  
 */







