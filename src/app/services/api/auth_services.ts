import axios from "axios";
const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_API;
const API_URL= process.env.NEXT_PUBLIC_BASE_API;


export const apiAuth = axios.create({
    baseURL: AUTH_BASE_URL
})

export const api = axios.create({
    baseURL: API_URL
})
export const userRegister = async (data: any) => {
    return await apiAuth.post(data)
}

export const userLogin = async (email: string, password: string) => {

    return await api.get(`/login?email=${email}&password=${password}`)
}