<template>
    <div class="goods">
       <img :src="showImage" alt="" @load="imgload" @click="imgclick">
       <div class="goodsinfo">
           <p>{{goodsitem.title}}</p>
           <span>{{goodsitem.price}}</span>
           <span>{{goodsitem.cfav}}</span>
       </div>
   
    </div>
   </template>
   
   
   <script>
   export default {
       name: "GoodListItem",
       props: {
           goodsitem: {
               type: Object,
               default() {
                   return{}
               }
           }
       },
       computed: {
           showImage() {
               return  this.goodsitem.image || this.goodsitem.show.img
           }
       },
       methods: {
           imgload() {
               //利用事件总线，与Home.vue通信，$emit发送
               this.$bus.$emit('itemload')
           },
           imgclick() {
               this.$router.push('/detail/' + this.goodsitem.iid) //路由跳转，push进入需要进入的路由
           }
       }
   }
   </script>
   
   
   <style>
       .goods {
           padding-bottom: 40px;
           position: relative;
           width: 48%;
       }
       .goods img {
           width: 100%;
           border-radius: 5px;
       }
       .goodsinfo {
           font-size: 12px;
           position: absolute;
           bottom: 5px;
           left: 0;
           right: 0;
           overflow: hidden;
           text-align: center;
       }
       .goodsinfo p {
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
           margin-bottom: 3px;
       }
       .goodsinfo .price {
           color: pink;
           margin-right: 20px;
       }
       .goodsinfo .collect {
           position: relative;
       }
       .goodsinfo .collect ::before {
           content: '';
           position: absolute;
           left: -15px;
           top: -1px;
           width: 14px;
           height: 14px;
           background: url("../../assets/img/collection.png") 0 0/14px 14px;
       }
   </style>