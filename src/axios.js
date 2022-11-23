import axios from "axios"

export const httpClient = axios.create({
    // baseURL: "http://localhost:7171"
    // baseURL: "http://192.168.0.26:8182"     
    // baseURL: "http://52.66.195.115:8182" 
    baseURL: "https://artnstock.herokuapp.com" 

});