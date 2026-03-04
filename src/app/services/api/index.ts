import axios from "axios";

const API_URL= process.env.NEXT_PUBLIC_BASE_API

export const api = axios.create({
    baseURL: API_URL
})

export const getAllProducts = async () =>
    await api.get('/products')


export const getProductById = async (id: number) =>
    await api.get(`/product/id/${Number(id)}`)

export const getProductBySku = async (sku: number) =>
    await api.get(`/product/${Number(sku)}`)


export const getAllByCategory = async (category: string) =>
    await api.get(`/products?category=${category}`)



