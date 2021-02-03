import { add, del } from './actionTypes'

export const addNameCreater = (data) =>({type:add,data:data})
export const delNameCreater = (data) =>({type:del,data:data})
