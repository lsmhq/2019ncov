import Axios from 'axios';


export const request = {
    get : (url,params)=>Axios({
        method:'get',
        url:url,
        params:params
    })
    ,
    post : (url,params)=>Axios({
        method:'POST',
        params:params,
        url:url
    })
}