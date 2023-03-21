import axios from "axios";
//https://online-medicine-shop-rest-api.vercel.app/api/
// const BASE_URL = "http://localhost:5000/api/"
const BASE_URL = "https://online-medicine-shop-rest-api.vercel.app/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2MwOWQzZGZjMmQ0OWIyODEzOWE3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzY4NDkwMCwiZXhwIjoxNjU3OTQ0MTAwfQ.krn526YwyyarcpbUdVvfh-svzA2LYfXASUs6DDyCFZ4"

export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : { token : `Bearer ${TOKEN}` }
})