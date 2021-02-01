import Axios from 'axios';

// 拦截器

Axios.interceptors.request.use(config=>{
    
    config.data = {
        ...config.data,
        "token": localStorage.getItem('token'),
    }

})

Axios.interceptors.response.use(response=>{
    console.log('axios-http.js ---->',response)
},error => {
    if(error.response.status === 401){

    }   
    return Promise.resolve(error.response)
});

// 请求
const Api = {
    get: (url,params)=>{
        params.token = token;
        return (Axios({
            url:url,
            method:'GET',
            params:params
        }))
    },
    post: (url,params)=>{
        params.token = token;
        return (Axios({
            url:url,
            method:'POST',
            params:params
        }))
    }
};

export default Api;