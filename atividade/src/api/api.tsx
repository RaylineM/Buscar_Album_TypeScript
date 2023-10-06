import axios from "axios"

const album_api = axios.create({
    baseURL:" http://ws.audioscrobbler.com/2.0"
})
export default album_api