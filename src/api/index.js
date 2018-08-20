//专做请求数据
// 导入axios
import axios from 'axios'
const baseURL = 'http://027xin.com:8899'
axios.defaults.baseURL=baseURL

// 轮播图
export const getlunbotu =params =>{
    return axios.get('/api/getlunbo').then(res=>res.data)
}