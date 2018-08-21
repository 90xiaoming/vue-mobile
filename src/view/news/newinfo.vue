<template>
    <div class="newinfo-container">
        <h3 class="title">新闻标题</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>
        <hr>

        <div class="content">

        </div>
    </div>
</template>
<script>
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
            
        }
    }
}
</script>
<style lang="scss" scoped>
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
    .content{}
}
</style>
