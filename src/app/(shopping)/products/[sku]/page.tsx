'use client'
import { useParams } from "next/navigation";

const Product = () => {
    const {sku} = useParams()
    return(
        <h1>Product Page {sku}</h1>
    )
}

export default Product;