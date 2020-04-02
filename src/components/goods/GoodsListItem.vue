<template>
 <div class="goods">
    <img :src="goodsitem.show.img" alt="">
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