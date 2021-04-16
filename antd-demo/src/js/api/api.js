import Request from './axios-http';

const reqPost = {
   // 接口
   topics: (params)=> Request.get('/api/good',params), 
   regist: (params)=> Request.post('/api/regist',params), 
   login: (params)=> Request.post('/api/login',params), 
   upLoad:(params)=>Request.post('/api/upLoad',params),
   publish:params=>Request.post('/api/publish', params),
   detail: (params)=> Request.get(`/api/detail`,params), 
   userInfo: params => Request.get('/api/userInfo',params),
   setAvator:params => Request.post('/api/setavator',params)
}

export default reqPost;