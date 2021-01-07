import {request} from './request'

const api = {
    getData: (params)=> request.get('/g2/getOnsInfo',params)
}
export default api;