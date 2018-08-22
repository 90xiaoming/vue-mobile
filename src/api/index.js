//专做请求数据
// 导入axios
import axios from 'axios'
const baseURL = 'http://027xin.com:8899'
axios.defaults.baseURL=baseURL

// 轮播图
export const getlunbotu =params =>{
    return axios.get('/api/getlunbo').then(res=>res.data)
}
//获取新闻列表
export const getnewsList =params =>{
    return axios.get('/api/getnewslist').then(res=>res.data)
}
//获取新闻详情
export const getnewsinfo =params =>{ //params = {id: this.id}
    return axios.get('/api/getnew/'+ params.id).then(res=>res.data)
}
//获取评论详情
export const getcomment =params =>{
    return axios.get(`/api/getcomments/${params.id}?pageindex=`+params.pageIndex).then(res=>res.data)
}