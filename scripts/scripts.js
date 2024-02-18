// console.log('added');

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.style.add('bg-lime-500');
}
let totalPrice = 0;
const cards = document.querySelectorAll('.kbd');
// console.log(cards);
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // console.log(element);
    card.addEventListener("click", function () {
        // console.log('clicked');
        // setBackgroundColorById(card);
        const value = card.querySelector('p').innerText;
        const value1 = 'Economoy';
        const prices = '550';
        // console.log(value);
        const titleContainer = document.getElementById('title-container');
        console.log(titleContainer);
        const p = document.createElement('p');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');

        p.innerText = value;
        p1.innerText = value1;
        p2.innerText = prices;
        titleContainer.appendChild(p);
        titleContainer.appendChild(p1);
        titleContainer.appendChild(p2);

        // calculate price
        const price = parseFloat(prices);
        totalPrice += price;
        // console.log(totalPrice);
        document.getElementById('totalPrice').innerText = totalPrice;
    });
}

const btn = document.getElementById('apply-btn');
// console.log(btn);
btn.addEventListener('click', function () {
    // console.log('clicked');

    // get the value from input
    const couponElement = document.getElementById('input-field').value;
    // console.log(couponElement.value);
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    console.log(couponCode);
    if(totalPrice >= 550){
        if(couponCode === "NEW15"){

        }else if(couponCode === "COUPLE20"){

        }
        else{
            alert('invalid Coupon');
        }
    }
    else{
        alert ("Please Buy 1 ticket");
    }
})

// function ticketClickedById(){
//     setBackgroundColorById()
// }