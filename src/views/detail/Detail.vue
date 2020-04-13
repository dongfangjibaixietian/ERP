<template>
    <div class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>

    <scroll class="con" ref="scroll">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    <goods-list :goods="recommends"></goods-list>
    </scroll>

    </div>
</template>


<script>
    //:外部goods="本地goods",把本组件的goods，动态赋值（发送）给外部组件
    import DetailNavBar from './childComps/DetailNavBar.vue'
    import DetailSwiper from './childComps/DetailSwiper.vue'
    import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
    import DetailShopInfo from './childComps/DetailShopInfo.vue'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
    import DetailParamInfo from './childComps/DetailParamInfo.vue'
    import DetailCommentInfo from './childComps/DetailCommentInfo.vue'

    import Scroll from '../../components/scroll/Scroll.vue'
    import GoodsList from '../../components/goods/GoodsList.vue'
    

    import {getDetail, Goods, Shop, GoodsParam, getRecommend} from '../../network/detail'
    //所有以类构造数据的方式都需要引入，引入的只是方法对象结构函数，引入函数不需要在components中注册。上面再引入数据的具体展示包
    
    
    export default {
        name: 'Detail',
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            GoodsList
            
        },
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                recommends: []
            }
        },
        created() {
            //保存传入的iid
            this.iid = this.$route.params.iid

            //根据iid请求详情数据，方法在network中定义
            getDetail(this.iid).then(res => {
                const data = res.data.result
                this.topImages = data.itemInfo.topImages

                //通过类将复杂数据整合到一起
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                //通过类将商家数据整合到一起
                this.shop = new Shop(data.shopInfo)
                //保存商品的详情数据
                this.detailInfo = data.detailInfo
                //通过类将商品其他数据保存
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
                //保存商品评论信息
                if (data.rate.cRate !== 0) {
                    this.commentInfo = data.rate.list[0]
                }
            }),
             //请求推荐数据
            getRecommend().then(res => {
            this.recommends = res.data.data.list
        }
        )
        },
       
        methods:{
            imageLoad() {
                this.$refs.scroll.refresh()
            }
        },
    }
</script>



<style>
.detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh; 
}

.con {
    height: calc(100% - 44px);
}

.detail-nav {
    position: relative;
    z-index: 9;
    background-color: pink;
}

</style>