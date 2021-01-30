console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        const shipsToHTML = product.shipsTo.reduce((acc, country) => `<li>${acc}</li><li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);

//###################################### adding listen event ############################//

const product = document.querySelector('.search > input')
product.addEventListener('keyup', product)

//############################ filter, render and Search products #######################//
const filterProduct = products.filter (product =>
    product.name === product.value)

function productSearch () {
    if (!productSearch.value) {
        renderProducts(products)
            } else {
         return renderProducts(filterProduct)
            }
        }

//############ Price analytics ###############//

const productPrice = products.map (product => product.price)
serverResponse = () => "data received";

function  sendPricesToServer (arrayPrice, callback) {
    const server = {
        prices: () => arrayPrice
    }
    console.log (callback(),server.prices());
}
sendPricesToServer(productPrice, serverResponse)
