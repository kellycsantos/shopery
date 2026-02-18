'use client'
import { getAllProducts } from "@/app/services/api";
import { resolve } from "path";
import { useState, useEffect } from "react";


const Products = () => {
    useEffect(() => {
        getAllProducts().then((response) => {
            console.log(response.data)
        })
    },[])
    return(
        <h1>Products Page</h1>

    )
}

export default Products;