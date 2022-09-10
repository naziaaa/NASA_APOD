import axios from "axios"

const nasaEndpoint =process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey=process.env.REACT_APP_NASA_API_KEY


axios.interceptors.request.use(
    confiq => {
        confiq.params = confiq.params ? confiq.params : {}
        const confiqUrl=confiq.url
        if(confiqUrl.includes(nasaEndpoint)){
            confiq.params["api_key"]= nasaApiKey
        }
        return confiq
    },
    error=>{
        return Promise.reject(error)
    }
)

export default{
    getApod(){
        return axios.get(`${nasaEndpoint}planetary/apod`)
    },
}