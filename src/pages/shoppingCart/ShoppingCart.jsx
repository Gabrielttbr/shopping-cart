import Navbar from "../../components/navbar/Navbar";
import useShoppingCart from "../../hooks/UseShoppingCart"
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import './ShoppingCart.css'
import Footer from "../../components/footer/Footer";

const renderProducts = (products) => {
    if (products.length === 0) {
        return (
            <div>
                <h2 className="title-shoppig-cart">O seu carrinho está vazio.</h2>
                <Button 
                    content={'CONTINUAR COMPRANDO'}
                    type={'button'}
                    onClick={() => (<Link to={'/'}/>)}
                />
            </div>
        )
    }

    return products.map((product, key) => {
        return (
            <div key={key}>
                <p>title: {String.product.title}</p>
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
            <Navbar />
            <div className="box distance-from-top">
                {renderProducts(shoppingCart.products)}
            </div>
            <Footer />
        </div>
    )
}