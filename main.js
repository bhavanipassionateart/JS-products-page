let products = [
    {
        name: "Banana",
        description: "A yellow banana. Some say it's a berry.",
        price: 9
    },
    {
        name: "Apple",
        description: "A red apple, sweet and tasty.",
        price: 7
    },
    {
        name: "Orange",
        description: "An orange. It's orange.",
        price: 10
    }
];

//Display all products
function showProducts(){
    let html = '';
    //Loop over products
    for(let product of products){
        html +=`
        <div class="product">
        <h2>${product.name}</h2>
        <div class ="info">
            <p>${product.description}</p>
            <p>Pris: <b>${product.price}</b></p>
            </div>
            <button class="remove" data-product-name="${product.name}">Remove</button>
            <hr>
            </div>
        `;
    }
    //Add html to the document, products div
    document.querySelector('.products').innerHTML =html;
}
//showProducts();

// Handle all click events
function handleEvents() {
    // Add event listner to entire body and listen for clicks
    document.querySelector('body').addEventListener('click', function(event) 
    {
        //Get the closest product-class to where we clicked
        let productClicked = event.target.closest('.product');
        // If you click somewhere unrelated,we just return
        if(!productClicked) {return;}

        //Get the info-div from the clicked product
        let infoProduct = productClicked.querySelector('.info');
        // Ternary operator, if block - go none, if none -go block
        infoProduct.style.display=infoProduct.style.display=== 'block' ? 'none' : 'block';

        // If the closest element is the remove button
        let removeButton= event.target.closest('.remove');
        if (removeButton) {
            //Get the attribute data-product-name
            let productName = removeButton.getAttribute('data-product-name');
            //Remove product by name frome array, using filter
            products = products.filter((product) => product.name !== productName);
            productClicked.remove();
        }
    });
        // Event listner for the add product form that listens for submit, and not click
        let addProductForm = document.querySelector('#add-product-form');
         addProductForm.addEventListener('submit',function(event){
            //Don't let the site reload when submit is clicked
            event.preventDefault();
            //Get the values from the form
            let name = document.querySelector('#name').value;
            let description = document.querySelector('#description').value;
            let price = Number(document.querySelector('#price').value);

            //Error handling, check that all fields are filled out 
            if(name && description && price){
                //New product
                let newProduct = {
                    name: name,
                    description: description,
                    price: price
                };

                // add the product to the products array
                products.push(newProduct);

                //Resetthe form and show new div
                let productsDiv = document.querySelector('.products');
                productsDiv.innerHTML='';

                //Render the products again
                showProducts();
                console.log(products); // for debugging
                // Reset form
                addProductForm.reset();

            }else {
                alert ('Please fill in all fields!');
            }
    });


}
showProducts();
handleEvents();
