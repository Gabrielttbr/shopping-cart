import {  useEffect, useState } from "react"
import useShoppingCart from "../hooks/UseShoppingCart"
import { Link } from "react-router-dom";

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
        <main>
            <h1> This is my home</h1>
            <div>
                <button onClick={() => setAddProduct(addProduct + 1)}>asdasd</button>
                <Link to={'/shopping-cart'} >Click here</Link>
            </div>
        </main>
    )
}