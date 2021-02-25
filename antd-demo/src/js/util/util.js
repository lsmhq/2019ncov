const Util = {
    // 路由参数转对象
    qsParse : (str) =>{
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
    // 判断滑动到底部
    isBottom:(e,component)=>{
        // 判断滚动条是否到底
        const { clientHeight, scrollHeight, scrollTop } = e.target
        const isBottom = Number.parseInt(scrollTop) + Number.parseInt(clientHeight) >= scrollHeight - 100
        if (isBottom) {
            // 到底
            if (component.state.height == scrollHeight) {
                return false
            } else {
                // 加载
                component.setState({
                    height:scrollHeight
                })
                return true
            }
        }
        return false
    }
}

export default Util;