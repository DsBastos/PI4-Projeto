import axios from 'axios'
const BASE_URL  = 'https://api.constancafernan.repl.co/'



const api = axios.create({
    baseURL: BASE_URL
}) 

export default api;