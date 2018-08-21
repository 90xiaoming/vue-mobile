<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="itme in newsList" :key="itme.id">
                <router-link :to="'/home/newinfo/' + itme.id">
                    <img class="mui-media-object mui-pull-left" :src="itme.img_url">
                    <div class="mui-media-body">
                        <h1>{{itme.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>{{itme.add_time | dateFormat}}</span>
                            <span>{{itme.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
           

		</ul>
    </div>
</template>
<script>
import {getnewsList} from '@/api';
export default {
    data(){
        return {
            newsList:[] //新闻列表
        }
    },
    created(){
        this.getNews();
    },
    methods:{
        getNews() {
            getnewsList().then(res => {
                // console.log(res.status)
               if(res.status===0){
                   this.newsList = res.message;
                   console.log( this.newsList)
               }else{
                   Toast('获取新闻列表失败')
               }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
        .mui-ellipsis{
            font-size:12px;
            color: #226aff;
            //内容左右对其C3属性
            display: flex;
            justify-content: space-between;
        }
    }
    
}
</style>
