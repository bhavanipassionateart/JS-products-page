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
showProducts();
