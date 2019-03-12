/*

let basePrice = 100;
let finalPrice = 0;

function totalAmount() {
    finalPrice = basePrice * 1.12;
    console.log('Your phone is ' + finalPrice + '$');
}

totalAmount();

function totalAmountForSecond () {
    finalPrice = basePrice * 1.20;
    console.log('Your second phone is ' + finalPrice + '$');
}

totalAmountForSecond();

function totalPriceForThird(){
    let firstPrice = 1023;
    finalPrice = firstPrice * 1.30;
    console.log('Your second phone is ' + finalPrice + '$');
}

totalPriceForThird();

*/

let basePrice = 100;
let finalPrice=0;

function lessTax(){
    finalPrice = basePrice*1.12;
    console.log('Your final price is $' + finalPrice);
}

function midTax(){
    finalPrice = basePrice*1.20;
    console.log('Your final price is $' + finalPrice);
}

function highTax(){
    finalPrice = basePrice*1.50;
    console.log('Your final price is $' + finalPrice);
}

if (basePrice<500) {
    lessTax();
} else if(basePrice<1000){
    midTax();
}else{
    highTax();
}