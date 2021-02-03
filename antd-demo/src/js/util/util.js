const Util = {
    // 路由参数转对象
    qsParse = (str) =>{
        let innerStr = JSON.parse(JSON.stringify(str));
        innerStr = innerStr.split('?')[1];
        innerStr = innerStr.split('&');
        let obj = {}
        for(let key in innerStr){
            innerStr[key] = innerStr[key].split('=');
            obj[innerStr[key][0]] = innerStr[key][1]
        }
        return obj;
    },
    // 
}