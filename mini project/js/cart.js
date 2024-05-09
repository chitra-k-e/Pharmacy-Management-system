
// document.addEventListener("DOMContentLoaded", function () {
//     updateCart();

//     function updateCart() {
//         const cartItemsContainer = document.getElementById("cart-items");
//         cartItemsContainer.innerHTML = "";

//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         cartItems.forEach(item => {
//             const cartItemElement = document.createElement("div");
//             cartItemElement.classList.add("cart-item"); // Add cart-item class

//             cartItemElement.innerHTML = `
//                 <div class="cart-item-details">
//                     <div class="cart-item-name"><strong>Name:</strong> ${item.name}</div>
//                     <div class="cart-item-quantity"><strong>Quantity:</strong> ${item.quantity}</div>
//                     <div class="cart-item-price"><strong>Price:</strong> ${item.price}</div>
//                 </div>
//                 <hr class="cart-item-separator">
//             `;
//             cartItemsContainer.appendChild(cartItemElement);
//         });
//     }
// });
// document.addEventListener("DOMContentLoaded", function () {
//     updateCart();

//     function updateCart() {
//         const cartItemsContainer = document.getElementById("cart-items");
//         cartItemsContainer.innerHTML = "";

//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         cartItems.forEach(item => {
//             const cartItemElement = document.createElement("div");
//             cartItemElement.classList.add("cart-item"); // Add cart-item class

//             cartItemElement.innerHTML = `
//                 <div class="cart-item-name">${item.name}</div>
//                 <div class="cart-item-quantity">${item.quantity}</div>
//                 <div class="cart-item-price">${item.price}</div>
//             `;
//             cartItemsContainer.appendChild(cartItemElement);
//         });
//     }
// });
// document.addEventListener("DOMContentLoaded", function () {
//     updateCart();

//     function updateCart() {
//         const cartItemsContainer = document.getElementById("cart-items");
//         cartItemsContainer.innerHTML = "";

//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         cartItems.forEach((item, index) => {
//             const cartItemElement = document.createElement("div");
//             cartItemElement.classList.add("cart-item");

//             cartItemElement.innerHTML = `
//                 <div class="cart-item-name">${item.name}</div>
//                 <div class="cart-item-quantity">${item.quantity}</div>
//                 <div class="cart-item-price">${item.price}</div>
//                 <div class="cart-item-actions">
//                     <button class="remove-item" data-index="${index}">Remove</button>
//                     <button class="edit-item" data-index="${index}">Edit</button>
//                 </div>
//             `;
//             cartItemsContainer.appendChild(cartItemElement);
//         });

//         // Add event listeners for remove and edit buttons
//         document.querySelectorAll('.remove-item').forEach(button => {
//             button.addEventListener('click', function() {
//                 const index = this.dataset.index;
//                 removeItem(index);
//                 updateCart();
//             });
//         });

//         document.querySelectorAll('.edit-item').forEach(button => {
//             button.addEventListener('click', function() {
//                 const index = this.dataset.index;
//                 // Call a function to handle editing
//                 // For example: editItem(index);
//             });
//         });
//     }

//     function removeItem(index) {
//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         cartItems.splice(index, 1);
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }

//     // You can add a function to handle editing if needed
//     // function editItem(index) { ... }
// });
// document.addEventListener("DOMContentLoaded", function () {
//     updateCart();

//     function updateCart() {
//         const cartItemsContainer = document.getElementById("cart-items");
//         cartItemsContainer.innerHTML = "";

//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         let totalPrice = 0.00; // Initialize total price variable

//         cartItems.forEach((item, index) => {
//             const cartItemElement = document.createElement("div");
//             cartItemElement.classList.add("cart-item");

//             cartItemElement.innerHTML = `
//                 <div class="cart-item-name">${item.name}</div>
//                 <div class="cart-item-quantity">${item.quantity}</div>
//                 <div class="cart-item-price">${item.price}</div>
//                 <div class="cart-item-actions">
//                     <button class="remove-item" data-index="${index}">Remove</button>
//                     <button class="edit-item" data-index="${index}">Edit</button>
//                 </div>
//             `;
//             cartItemsContainer.appendChild(cartItemElement);

//             // Calculate item subtotal and add to total price
//             totalPrice += parseFloat(item.price) * parseInt(item.quantity);
//         });

//         // Add total price to the cart
//         const totalPriceElement = document.createElement("div");
//         totalPriceElement.classList.add("total-price");
//         totalPriceElement.innerHTML = `<strong>Total Price:</strong> Rs.${totalPrice.toFixed(2)}`;
//         cartItemsContainer.appendChild(totalPriceElement);


//         // Add event listeners for remove and edit buttons
//         document.querySelectorAll('.remove-item').forEach(button => {
//             button.addEventListener('click', function() {
//                 const index = this.dataset.index;
//                 removeItem(index);
//                 updateCart();
//             });
//         });

//         document.querySelectorAll('.edit-item').forEach(button => {
//             button.addEventListener('click', function() {
//                 const index = this.dataset.index;
//                 // Call a function to handle editing
//                 // For example: editItem(index);
//             });
//         });
//     }

//     function removeItem(index) {
//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         cartItems.splice(index, 1);
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }

//     // You can add a function to handle editing if needed
//     // function editItem(index) { ... }
// });




document.addEventListener("DOMContentLoaded", function () {
    updateCart();

    function updateCart() {
        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = "";

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        let totalPrice = 0.00; // Initialize total price variable

        cartItems.forEach((item, index) => {
            const cartItemElement = document.createElement("div");
            cartItemElement.classList.add("cart-item");

            cartItemElement.innerHTML = `
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-quantity">${item.quantity}</div>
                <div class="cart-item-price">${item.price}</div>
                <div class="cart-item-actions">
                    <button class="remove-item" data-index="${index}">Remove</button>
                    <button class="edit-item" data-index="${index}">Edit</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);

            // Calculate item subtotal and add to total price
            totalPrice += parseFloat(item.price);
        });

        // Add total price to the cart
        const totalPriceElement = document.createElement("div");
        totalPriceElement.classList.add("total-price");
        totalPriceElement.innerHTML = `<strong>Total Price:</strong> Rs.${totalPrice.toFixed(2)}`;
        cartItemsContainer.appendChild(totalPriceElement);


        // Add event listeners for remove and edit buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.dataset.index;
                removeItem(index);
                updateCart();
            });
        });

        document.querySelectorAll('.edit-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.dataset.index;
                // Call a function to handle editing
                // For example: editItem(index);
            });
        });
    }

    function removeItem(index) {
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    // You can add a function to handle editing if needed
    // function editItem(index) { ... }
});
