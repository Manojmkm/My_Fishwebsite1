// navbar function

window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// add to cart items

// const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
// const cartItemsContainer = document.getElementById('cart-icon');
// let cartCount = 0;

// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const productCard = button.parentElement;
//         const productName = productCard.querySelector('h4').textContent;
//         const productPrice = productCard.querySelector('.discount-price').textContent;

//         // Create a list item for the cart
//         const cartItem = document.createElement('li');
//         cartItem.innerHTML = `${productName} - ${productPrice}`;
//         cartItemsContainer.appendChild(cartItem);

//         cartCount++;
//         updateCartCount();
//     });
// });

// function updateCartCount() {
//     const cartCountElement = document.getElementById('cart-count');
//     cartCountElement.textContent = cartCount;
// }

// add to cart items

var addItemId=0;
function addToCart(item){
    addItemId +=1;
    var selectedItem=document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img=document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title=document.createElement('div');
    title.innerText=item.children[1].innerText;
    var label=document.createElement('div');
    label.innerText=item.children[2].children[0].innerText;
    var select=document.createElement('span');
    select.innerText=item.children[2].children[1].value;
    label.append(select);
    var delBtn=document.createElement('button');
    delBtn.innerText='Delete';
    delBtn.setAttribute('onclick','del('+addItemId+')');
    var cartItems=document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}

function del(item){
    document.getElementById(item).remove()
}