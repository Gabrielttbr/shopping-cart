export function addProductInShoppingCart(product, setShoppingCart, shoppingCart) {
 
    if (NotExistThisProductInShoppingCart(shoppingCart.products, product)) {
        const newProducts = [...shoppingCart.products, {
            id: product.id,
            price: product.price,
            title: product.title,
            description: product.description,
            image_url: product.image_url,
            amount: 1
        }];
    
        setShoppingCart({ ...shoppingCart, products: newProducts });
    }
}


export function incrementAmountOfProduct(product, setShoppingCart, shoppingCart) {
    shoppingCart.products[findProduct(product, shoppingCart.products)].amount++ 

    setShoppingCart({...shoppingCart})
}

export function decrementAmountOfProduct(product, setShoppingCart, shoppingCart) {
    const currentProduct = shoppingCart.products[findProduct(product, shoppingCart.products)]
    
    if (currentProduct.amount !== 1) {
        currentProduct.amount-- 

        setShoppingCart({...shoppingCart})
    }
}

export function deleteProduct(product, setShoppingCart, shoppingCart) {
    const currentProducts = shoppingCart.products.filter(item => item.id !== product.id)
   
    setShoppingCart({...setShoppingCart, products: currentProducts})
}

function findProduct(product, listProducts) {
    return listProducts.indexOf(product)
}

function NotExistThisProductInShoppingCart(productsInShopping, currentProducts) {
    return !productsInShopping.find((item) => item.id === currentProducts.id )
}
