import request from './axios-http';

const reqPost = {
   // 接口
   topics: (params)=> request.get('https://cnodejs.org/api/v1/topics',params), 
}

export default reqPost;