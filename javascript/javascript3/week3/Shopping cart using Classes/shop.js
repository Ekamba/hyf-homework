class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {
        if (currency === 'DKK') {
            return this.price * 7;
        }else if (currency === 'EUR') {
            return this.price * 0,905763;
        }else if (currency === 'XAF') {
            return this.price * 594;
        } else {
            return ('unknown currency')
        }
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        this.products.push(product)
    }

    removeProduct (product) {
        const matchedIndex = this.products.indexOf (product);
    
        if (matchedIndex > -1) {
          this.products.splice (matchedIndex, 1);
        }
      }

    searchProduct(productName) {
        const searchPro = this.products.filter(product => {
            if (product.name === productName){
                return true
            }
        })
    }

    getTotal() {
const totalPrice = this.products.reduce(function(total, product) {
    return total + product.price;
}, 0)
return totalPrice;
}

getUser() {

    fetch("https://jsonplaceholder.typicode.com/users/1")
.then (re => re.json())
.then (userInfo => {
const username = userInfo.username
const divView = document.createElement ('div')
document.body.appendChild(divView)
divView.innerHTML = `User: ${username}`;
})
.then (() => this.renderProducts ())
.catch(err => console.log(err))
}

    renderProducts() {
        const Ul = document.createElement('ul');
        document.body.appendChild(Ul)
        for ( let i = 0; i < this.products.length; i++) {
            const Li = document.createElement('li')
            Li.innerHTML = `${this.products[i].name}: ${this.products[i].price} KR`;
            Ul.appendChild (Li)
        }
    }

        renderTotal () {
        const divView = document.createElement ('div');
        document.appendChild (divView)
        divView.innerHTML = `totalPrice: ${this.getTotal ()} KR`;
        
    }
}

const flatscreen = new Product('flat-screen', 5000);
const oneplusMcLaren = new Product ('Smartphone oneplus', 6000)
const cortezLow = new Product (' snaker Lacoste', 1500)
const gStar = new Product ('jeans gStar', 1050)

const shoppingCart = new ShoppingCart([flatscreen, oneplusMcLaren, cortezLow, gStar]);

shoppingCart.addProduct (oneplusMcLaren)
shoppingCart.removeProduct (cortezLow)
shoppingCart.searchProduct (gStar)
shoppingCart.getTotal()
shoppingCart.getUser()

// Assuming dkr as default currency
const plant = new Product('plant', 50);
console.log(plant.convertToCurrency('XAF')) // 87
