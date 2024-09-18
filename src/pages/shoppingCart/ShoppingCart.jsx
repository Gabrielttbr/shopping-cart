import Navbar from "../../components/navbar/Navbar";
import useShoppingCart from "../../hooks/UseShoppingCart"
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { decrementAmountOfProduct, incrementAmountOfProduct, deleteProduct } from "../../services/shopping-cart/Shopping-cart";
import './ShoppingCart.css'
import Product from "../../components/product/Product";

const renderProducts = (products) => {
    const navigate = useNavigate()
    const { shoppingCart, setShoppingCart } = useShoppingCart();

    if (products?.length === 0 || products == null) {
        return (
            <div>
                <h2 className="title-shoppig-cart">O seu carrinho está vazio.</h2>
                <Button
                    content={'CONTINUAR COMPRANDO'}
                    type={'button'}
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </div>
        )
    }

    return products.map((product, key) => {
        return (
            <div key={key} className="box-detail-product">
                <div className="box-view-product">
                    <img src={product.image_url} alt={product.title} height={100} width={100} />
                </div>
                <div className="detail-from-product">
                    <h5 className="title-product-detail">{product.title}</h5>
                    <div className="box-with-price-quantity">
                        <p className="price-container-detail">{Number.parseFloat((product.price * product.amount)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <div className="amount-shopping">
                            <p className="quantity">Quantidade</p>
                            <div className="sum-sub-amount">
                                <p className="sub-amount operation" onClick={() => decrementAmountOfProduct(product, setShoppingCart, shoppingCart)}>-</p>
                                <p className="operation">{product.amount}</p>
                                <p className="sum-amount operation" onClick={() => incrementAmountOfProduct(product, setShoppingCart, shoppingCart)}>+</p>
                            </div>
                            <div className="delete-product-from-shopping" onClick={() => deleteProduct(product, setShoppingCart, shoppingCart)}>Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}


export default function ShoppingCart() {
    const { shoppingCart, setShoppingCart } = useShoppingCart();
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <div className="box distance-from-top">
                {renderProducts(shoppingCart.products)}
            </div>
            <div className="box-button-continue-and-finish">
                <Button
                    onClick={() => navigate('/')}
                    margin={10}
                    backgroundColor="#fff"
                    color="#ff9900"
                    content={'Continuar comprando'} />
                <Button 
                    onClick={() => navigate('/finalize-shopping')}
                    content={'Finalizar a compra'}
                    margin={10}
                />
            </div>
            <Footer />
        </div>
    )
}