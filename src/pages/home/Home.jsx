import useShoppingCart from "../../hooks/UseShoppingCart"
import Navbar from "../../components/navbar/Navbar";
import MockProducts from '../../../mock-products-api'
import Product from "../../components/product/Product";
import Footer from "../../components/footer/Footer";
import {addProductInShoppingCart} from "../../services/shopping-cart/Shopping-cart";
import './Home.css'

function RenderProducts() {
    const {shoppingCart, setShoppingCart} = useShoppingCart();
    
    return MockProducts().products.map((product, key) => {
        return (<Product key={key}
                title={product.title}
                description={product.description}
                price={product.price}
                img_url={product.image_url}
                onClick={() => addProductInShoppingCart(product, setShoppingCart, shoppingCart)}
            />
        )
    })
}


export default function Home() {
    return (
        <main className="main-container-center distance-from-top">
            <Navbar></Navbar>
            <div className="max-container"> 
                {RenderProducts()}
            </div>
            <Footer></Footer>
        </main>
    )
}