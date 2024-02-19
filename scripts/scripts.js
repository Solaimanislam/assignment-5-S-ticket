
let totalPrice = 0;
let selectedCount = 0; 
const cards = document.querySelectorAll('.kbd');

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  
  card.addEventListener("click", handleClickOnce);
}

function handleClickOnce(event) {
  const card = event.currentTarget;
  btn.removeAttribute('disabled');
  loginBtn.removeAttribute('disabled');
  if (selectedCount === 4 || card.classList.contains('clicked')) {
    return; 
  }
  
  card.classList.add('clicked');
  card.classList.add('bg-lime-500')
  selectedCount++; 
  const greenC = document.getElementById('greenCount');
  greenC.innerText = 40 - selectedCount;
  
  const counter = document.getElementById('counter');
  counter.innerText = selectedCount;
  const value = card.querySelector('p').innerText;
  const value1 = 'Economoy';
  const prices = '550';
  
  const titleContainer = document.getElementById('title-container');
  const p = document.createElement('p');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p.innerText = value;
  p1.innerText = value1;
  p2.innerText = prices;
  titleContainer.appendChild(p);
  titleContainer.appendChild(p1);
  titleContainer.appendChild(p2);

  const price = parseFloat(prices);
  totalPrice += price;
  document.getElementById('totalPrice').innerText = totalPrice;

  card.removeEventListener("click", handleClickOnce);
}

const btn = document.getElementById('apply-btn');

btn.addEventListener('click', function () {
    

    
    const couponElement = document.getElementById('input-field').value;
    
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    const couponCode1 = couponElement;
    console.log(couponCode1);
    console.log(couponCode);
    if(totalPrice >= 2200){
        const btn1 = document.getElementById('apply-btn');
        
        btn1.removeAttribute('disabled');
        if(couponCode === "NEW15"){
            

            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.15;
            discountElement.innerText = discountAmount;
            
            const restTotal = document.getElementById('total')
            restTotal.innerText = totalPrice - discountAmount;
            document.getElementById('input-field').value = "";
            const hiddenI = document.getElementById('input-hidden');
            hiddenI.classList.add('hidden');

        }else if(couponCode1 === "Couple 20"){

            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount;
            
            const restTotal = document.getElementById('total')
            restTotal.innerText = totalPrice - discountAmount;
            const hiddenI = document.getElementById('input-hidden');
            hiddenI.classList.add('hidden');
        }
        else{
            alert('invalid Coupon');
            document.getElementById('input-field').value = "";
        }
    }
    else{
        alert ('get 4 tickets');
        document.getElementById('input-field').value = "";
    }
});
  
const login = document.getElementById('login-form');
    login.addEventListener('input', function(){
    const userName = document.getElementById('userName').value;
    const number = document.getElementById('number').value;
    const loginBtn = document.getElementById('loginBtn');
    if(userName.length > 0 && number.length >= 11){
        loginBtn.removeAttribute('disabled');
    }
    else {
        loginBtn.setAttribute('disabled', 'disabled');
    }
})