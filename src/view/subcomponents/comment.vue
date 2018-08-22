<template>
   <div class="cmt-container">
       <h3>发表评论</h3>
       <hr>
       <textarea placeholder="请输入评论的内容(最多120字)" maxlength="120">

       </textarea>
       <mt-button type="primary" size="large">发表评论</mt-button>

       <div class="cmt-list">
           <div class="cmt-itme" v-for="(itme,i) in commentlist" :key="itme.add_time">
               <div class="cmt-title">
                   第{{i+1}}楼&nbsp;&nbsp;用户：{{itme.user_name}}&nbsp;&nbsp;发表时间：{{itme.add_time | dateFormat}}
               </div>
               <div class="cmt-body">
                   {{itme.content === 'undefined'? '什么都没':itme.content}}
               </div>
           </div>
       </div>

       <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div> 
</template>
<script>
import {getcomment} from '@/api';
export default {
    data(){
        return{
            pageIndex:1,
            commentlist:[]
        }
    },
    created(){
        this.getcmt(); 
    },
    methods:{
        getcmt(){//获取评论
          getcomment({id: this.id,pageIndex:this.pageIndex}).then(res => {
              console.log(res)
                if(res.status===0){
                //    this.commentlist = res.message;
                //获取新数据，不覆盖老数据
                this.commentlist = this.commentlist.concat(res.message)
                   
               }
            })
        },
        getMore(){ //加载更多
        this.pageIndex++;
        this.getcmt();
        }
    },
    props:["id"]
    
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 16px;
    }
    textarea{
        font-size: 14px;
        height: 80px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-itme{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em; //向前空2格
            }
        }
    }
}
</style>
