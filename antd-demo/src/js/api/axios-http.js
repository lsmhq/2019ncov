import Axios from 'axios';

// 拦截器
Axios.interceptors.request.use(config=>{
    
    config.data = {
        ...config.data,
        "token": localStorage.getItem('token'),
    }
})

Axios.interceptors.response.use(response=>{
    console.log('log from axios-http.js ---->',response);
},error => {
    if(error.response.status != 401){
        console.error('api error log from axios-http.js ---->',error.response);
    }   
    return Promise.resolve(error.response)
});

// 请求
const Request = {
    get: (url,params)=>{
        return (Axios({
            url:url,
            method:'GET',
            params:params
        }))
    },

    post: (url,params)=>{
        return (Axios({
            url:url,
            method:'POST',
            params:params
        }))
    }
};

export default Request;