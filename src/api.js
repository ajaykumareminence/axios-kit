import axios from "axios";
export default class ApiClass{
    BASE_URI = "";
    constructor(base_uri){
        this.BASE_URI = base_uri;
    }
    static config(token=null, params=null){
        var configuration = {
            headers:{
                "content-type":"application/json"
            }
        }
        if(token){
            configuration.headers["authorization"] = `Bearer ${token}`
        }
        if(params){
            Object.assign(configuration.headers, params)
        }
        return configuration;
    }
    static getRequest(api_uri, token=null, params=null){
        return axios.get(this.BASE_URI+api_uri, this.config(token, params)).then((res)=>{
            return { api_status: 1, api_response: res.data };
        }).catch((error)=>{
            return { api_status: 0, api_error: error }
        })
    }
}