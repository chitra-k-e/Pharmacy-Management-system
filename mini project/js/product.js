let previewContainer= document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>
    {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    }
});
previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
})

// product.js
// document.addEventListener("DOMContentLoaded", function () {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");
//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             const product = {
//                 name: this.dataset.name,
//                 quantity: this.dataset.quantity,
//                 price: this.dataset.price
//             };
//             addToCart(product);
//         });
//     });

//     function addToCart(product) {
//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         cartItems.push(product);
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = {
                name: this.dataset.name,
                quantity: this.dataset.quantity,
                price: this.dataset.price
            };
            addToCart(product);
            // Display added text in the button
            this.textContent = `Added`;
        });
    });

    function addToCart(product) {
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
});




// const pro1 = [
//     {
//         id:1,
//         name:"Gulcon-D",
//         quantity:"1 pack",
//         expiry_date: 30/12/2025,
//         price:50.00,
//         manufacturer:"Zydus Lifesciences",
//         image: "image/products/pro1.png"
//     },
//     {
//         id:2,
//         name:"Glycomet",
//         quantity:"500mg",
//         expiry_date: 30/12/2025,
//         price: 2.00,
//         manufacturer:"USV pvt ltd",
//         image: "image/products/ec1.png"
//     }
// ];

// const productList = document.getElementById('productList');
// const cartItemsElement = document.getElementById('cartItems');
// const cartTotal = document.getElementById('cartTotal');

// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// function renderProducts() 
// {
//     productList.innerHTML = pro1.map(
//         (product) => `
//         <div class="content product-info">
//             <h3 class="product-title" >${product.title}</h3>
//             <p class="product-quantity">${product.quantity}</p>
//             <p class="product-date">${product.date}</p> 
//             <p class="product-price">${product.price.toFixed(2)}</p>
//             <p class="product-manu">${product.manu}</p>
//             <div class="button">
//                 <a href="" data-id="${product.id}" class="buy add-to-cart">add to cart</a>
//             </div>
//         </div>
//         <img class="product-img" alt="${product.title}" src="${product.image}" alt="">

//         `
//     )
//     .join("")
// }
// function renderCartItems()
// {
//     cartItemsElement.innerHTML = cart.map
//     (
//         (item) => 
//         `
//         <div class="cart-item">
//         <img src="${item.image}" alt="${item.title}">
//         <div class="cart-item-info">
//             <h2 class="cart-item-title">${item.title}</h2>
//             <input 
//                 class="cart-item-quantity" 
//                 type="number" 
//                 name=" " 
//                 min="1" 
//                 value="${item.quantity}" 
//                 data-id="${item.id}">
//         </div>
//         <h2 class="cart-item-price">${item.price}</h2>
//         <button class="remove-from-cart" data-id="${item.id}">Remove</button>
//         </div>
//         `
//     )
//     .join("");
// }

// if(window.location.pathname.includes('cart.html'))
// {
//     renderCartItems();
// }
// else
// {
//     renderProducts();
// }

// renderProducts();
// renderCartItems();

// let previewContainer = document.querySelector('.products-preview');
// let previewBox = previewContainer.querySelectorAll('.preview');

// document.querySelectorAll('.products-container .product').forEach(product => {
//     product.onclick = () => {
//         let productName = product.getAttribute('data-name');

//         // Hide all preview boxes except the one corresponding to the clicked product
//         previewBox.forEach(preview => {
//             let targetName = preview.getAttribute('data-target');
//             if (targetName === productName) {
//                 preview.classList.add('active');
//             } else {
//                 preview.classList.remove('active');
//             }
//         });

//         // Display the preview container
//         previewContainer.style.display = 'flex';
//     }
// });

// previewBox.forEach(close => {
//     close.querySelector('.fa-times').onclick = () => {
//         close.classList.remove('active');
//         previewContainer.style.display = 'none';
//     }
// });



// let products = {
//     data:[
//     {
//         productName : "Glucon-D",
//         price: "50.00",
//         description: "Regular Instant Energy Drink Powder, 1 kg Refill Pack",
//         image:"image/products/product1.png"
//     }
// ]
// }
// for (let i of products.data)
// {
//     let card = document.createElement("div");
//     card.classList.add("card","i.category");

//     let imgcontainer = document.createElement("div");
//     imgcontainer.classList.add("image-conatiner");

//     let image = document.createElement("img");
//     image.setAttribute("src",i.image);
//     imgcontainer.appendChild(image);
//     card.appendChild(imgcontainer);

//     document.getElementById("products").appendChild(card);

//     let container = document.createElement("div");
//     container.classList.add("container");

//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);

//     let price = document.createElement("h6");
//     price.innerText = "Rs." + i.price;
//     container.appendChild(price)
// }

/* <div id="product1" class="section-p1">
<h1 id="healthcare" class="heading"><span>HealthCare Devices</span></h1>
<div class="pro-container">
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
</div>
</div>
<div id="product1" class="section-p1">
<h1 id="personalcare" class="heading"><span>Personal Care</span></h1>
<div class="pro-container">
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
</div>
</div>
<div id="product1" class="section-p1">
<h1 id="Skincare" class="heading"><span>Skin Care</span></h1>
<div class="pro-container">
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
</div>
</div>
<div id="product1" class="section-p1">
<h1 id="motherbabycare" class="heading"><span>Mother and BabyCare</span></h1>
<div class="pro-container">
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
    <div class="pro">
        <img src="image/products/product1.png" alt="">
        <div class="des">
            <h3>Glucon-D</h3>
            <p>Regular Instant Energy Drink Powder, 1 kg Refill Pack</p>
        </div>
        <a href="shop.html" style="margin-left: 50px;" class="btn">Add to Cart<span class="fas fa-chevron-right"></span></a>
    </div>
</div>
</div> */