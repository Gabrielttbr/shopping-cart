import {  useEffect, useState } from "react"
import useShoppingCart from "../hooks/UseShoppingCart"
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

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
            <Navbar></Navbar>
        </main>
    )
}