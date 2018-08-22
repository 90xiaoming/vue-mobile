<template>
    <div class="newinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time  }}</span>
            <span>点击：{{newsinfo.click}}</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>
         <!-- 评论子组件区域 -->
        <comment-box :id="this.id">
            
        </comment-box>
    </div>
</template>
<script>
//导入评论子组件
import comment from '../subcomponents/comment'
import {getnewsinfo} from '@/api';
export default {
    data(){
        return{
            id:this.$route.params.id,//将URL地址中传递过来的ID值挂载到data上。方便以后调用
            newsinfo:{} //新闻对象
       }
    },
   created(){
       this. getInfo()
   },
    methods:{
        getInfo(){
            getnewsinfo({id: this.id}).then(res => {
                if(res.status===0){
                   this.newsinfo = res.message[0];
                   console.log( this.newsinfo)
               }else{
                   Toast('获取新闻列表失败')
               }
            })
        }
    },
   components:{ //注册子组件的节点
        "comment-box":comment
    }
}
</script>
<style lang="scss">
.newinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width:100%;
        }
    }
}
</style>
