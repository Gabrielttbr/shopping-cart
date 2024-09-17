import {  useEffect, useState } from "react"
import useShoppingCart from "../../hooks/UseShoppingCart"
import Navbar from "../../components/navbar/Navbar";
import MockProducts from '../../../mock-products-api'
import Product from "../../components/product/Product";
import './Home.css'

function RenderProducts() {

    return MockProducts().products.map((product, key) => {
        return (<Product key={key}
                title={product.title}
                description={product.description}
                price={product.price}
                img_url={product.image_url}
            />
        )
    })
}


export default function Home() {
    const {shoppingCart, setShoppingCart} = useShoppingCart();
    
    const [addProduct, setAddProduct] = useState(0);

    useEffect(() => { 
        const newProducts = shoppingCart

        newProducts.products.push({
            id: 2,
            price: 1500,
            title: 'GALAXY A34',
            description: 'GOOD PHONE',
            quantity: 3
        })

        setShoppingCart(newProducts)
    }, [addProduct])

    return (
        <main className="main-container-center distance-from-top">
            <Navbar></Navbar>
            <div className="max-container"> 
                {RenderProducts()}
            </div>

        </main>
    )
}