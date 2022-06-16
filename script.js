
let mealTitle, beverageTitle, dessertTitle;
let mealPrice, beveragePrice, dessertPrice;
let total, costumerName, address;

function convertPrice (priceString) {

    let price = priceString.replace("R$ ","");
    price = price.replace(",", ".");
    price = Number(price) * 100;

    return price;
}

function select(selectedCard, element){
    if (selectedCard != null ) {
        selectedCard.classList.toggle("selected")
        let icon = selectedCard.querySelector("ion-icon")
        icon.classList.toggle("hidden")
    }
    
    let icon = element.querySelector("ion-icon")
    element.classList.toggle("selected")
    icon.classList.toggle("hidden")
}


function selectMeal(element){
    const selectedCard = document.querySelector(".meal-container .selected")
    select(selectedCard, element)

    mealTitle = element.querySelector(".meal-title").innerHTML
    mealPrice = element.querySelector(".meal-price").innerHTML
    mealPrice = convertPrice(mealPrice)
    addToCard()
}

function selectBeverage(element){
    const selectedCard = document.querySelector(".beverage-container .selected")
    select(selectedCard, element)

    beverageTitle = element.querySelector(".beverage-title").innerHTML
    beveragePrice = element.querySelector(".beverage-price").innerHTML
    beveragePrice = convertPrice(beveragePrice)
    addToCard()
}

function selectDessert(element){
    const selectedCard = document.querySelector(".dessert-container .selected")
    select(selectedCard, element)

    dessertTitle = element.querySelector(".dessert-title").innerHTML
    dessertPrice = element.querySelector(".dessert-price").innerHTML
    dessertPrice = convertPrice(dessertPrice)
    addToCard()
}

function addToCard(){
    if(mealTitle && beverageTitle && dessertTitle){
        let footerButton = document.querySelector(".footer-button")
        footerButton.classList.add("active")
        footerButton.innerHTML = 'Fazer o pedido'
    }
}

function showCard () {  
    if (mealTitle && beverageTitle && dessertTitle){
        costumerName = prompt('Informe seu nome');
        address = prompt('Onde devo entregar?');
        const overlay = document.querySelector('.overlay');
        overlay.querySelector('.checkOrder-meal .name').innerHTML = mealTitle;
        overlay.querySelector('.checkOrder-meal .price').innerHTML = (mealPrice / 100).toFixed(2);

        overlay.querySelector('.checkOrder-beverage .name').innerHTML = beverageTitle;
        overlay.querySelector('.checkOrder-beverage .price').innerHTML = (beveragePrice / 100).toFixed(2);


        overlay.querySelector('.checkOrder-dessert .name').innerHTML = dessertTitle;
        overlay.querySelector('.checkOrder-dessert .price').innerHTML = (dessertPrice / 100).toFixed(2);

        total = mealPrice + beveragePrice + dessertPrice;
        overlay.querySelector('.total .total-price').innerHTML = `R$ ${(total / 100).toFixed(2)}`;

        overlay.querySelector('.confirm').innerHTML = "Tudo certo, pode pedir!"

        overlay.classList.remove('hidden');
    }
 
}

function cancelOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hidden');
}

function sendOrder () {

    let msg = `Olá, gostaria de fazer o pedido:
    - ${mealTitle}: ${mealPrice}
    - ${beverageTitle}: ${beveragePrice}
    - ${dessertTitle}: ${beveragePrice}
    Total: R$ ${(total / 100).toFixed(2)}
    
    Nome: ${costumerName}
    Endereço: ${address}
    `

    msg = encodeURIComponent(msg);

    const serviceNumber = '329999999999'
    const whatsAppLink = `https://wa.me/${serviceNumber}?text=${msg}`
    window.open(whatsAppLink);
}