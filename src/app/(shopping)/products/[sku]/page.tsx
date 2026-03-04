'use client'
import { redirect, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getProductBySku } from "@/app/services/api";
import { ProductProps } from "@/app/types";
import { ProductShowcase } from "@/components";

const Product = () => {
    const { sku } = useParams()
    const [loading, setLoading] = useState<boolean>(false)
    const [product, setProduct] = useState<ProductProps>()

    const getProduct = async (param: number) => {
        await getProductBySku(param)
            .then((response) => {
                setLoading(true)
                setTimeout(() => {
                    setProduct(response.data)
                    setLoading(false)
                }, 1500)
            })
            .catch(() => {
                redirect('/not-found')
            })
    }
    useEffect(() => {
        getProduct(Number(sku))

    }, [sku])
    if (loading) {
        <h1>Loading ...</h1>
    }
    return (
        <ProductShowcase sku={product?.sku} 
        img={product?.image} 
        name={product?.name} 
        rating={product?.rating} 
        discount={product?.discount}
        price={product?.value}
        priceWithDiscount={product?.valueWithDiscount}
        description={product?.description}/>

    )
}

export default Product;