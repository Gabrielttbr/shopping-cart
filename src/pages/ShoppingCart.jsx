import useShoppingCart from "../hooks/UseShoppingCart"

const renderProducts = (products) => {
    return products.map( (product, key) => {
        return (
            <div key={key}>
                <p>title: {product.title}</p>
                <p>Price: {Number.parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p>Quantity: {product.quantity}</p>
            </div>
        )
    })
}


export default function ShoppingCart() {
    const { shoppingCart } = useShoppingCart();

    return (
        <div>
            {renderProducts(shoppingCart.products)}
        </div>
    )
}