'use client'

import style from './page.module.scss'

import { Card } from "@/app/components";
import { getAllProducts } from "@/app/services/api";
import { ProductProps } from "@/app/types";
import { useState, useEffect } from "react";


const Products = () => {
    const [products, setProducts] = useState<ProductProps[]>([])
    useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response.data)
        })
    }, [])
    return (
        <>

            <section className={style.products_page}>
                <section className={style.products_container}>
                    {
                        products.map((product) => (
                            <Card
                                tags={product.tags}
                                link={`products/${product.sku}`}
                                img={product.image} name={product.name}
                                value={product.value}
                                valueWithDiscount={product.valueWithDiscount}
                                discount={product.discount}
                                rating={product.rating}
                                rounded
                                key={product.sku}
                            />
                        ))
                    }
                </section>
            </section>
        </>
    )
}

export default Products;