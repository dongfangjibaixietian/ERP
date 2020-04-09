<template>
    <div id="home">
    <nav-bar><div slot="center">ERP物料</div></nav-bar>
    <scroll 
    class="scroll-content" 
    ref="scroll" 
    :probe-type="3"
    @scroll='contentscroll'
    :pull-up-load = "true"
    @pullingUp='loadmore'
    >
        <recommend-view></recommend-view>
        <tab-contral class="tab-control" 
        :titles="['流行','新款','精选']"
        @tabclick="tabclick">
        </tab-contral>
        <GoodsList :goods="showGoods"></GoodsList>
    </scroll>

    <back-top @click.native="backClick" v-show="isshowback"></back-top>
    </div>
</template>

<script>
    import NavBar from '../../components/navbar/NavBar.vue'
    import {getHomeMultidata, getHomeGoods} from '../../network/home'
    import RecommendView from './childComps/RecommendView.vue'
    import TabContral from '../../components/tabcontrol/TabContral.vue'
    import GoodsList from '../../components/goods/GoodsList.vue'
    import GoodsListItem from '../../components/goods/GoodsListItem.vue'
    import Scroll from '../../components/scroll/Scroll.vue'
    import BackTop from '../../components/backtop/BackTop.vue'

    //引入防抖函数
    import {debounce} from '../../components/utils'



    export default {
    name: 'Home',
    components: {
        NavBar,
        RecommendView,
        TabContral,
        GoodsList,
        GoodsListItem,
        Scroll,
        BackTop
    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop' : {page: 0 , list: []},
                'new' : {page: 0, list: []},
                'sell' : {page: 0, list: []}
            },
            currenttype:'pop',
            isshowback: false
        }
    },
    computed: {
        showGoods() {
            return this.goods[this.currenttype].list
        }
    },
    created() {
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    mounted() {
        //防止reflesh函数刷新过于频繁，添加防抖
        const refresh = debounce(this.$refs.scroll.refresh,200)

        this.$bus.$on('itemload',() => {
            //利用事件总线，$on接受GoodListItem的$emit
            refresh()
        })
    },
    methods: {
        getHomeMultidata() {
            getHomeMultidata().then(res => {
            this.banners = res.data.banner;
            this.recommends = res.data.recommends;
        })
        },
        getHomeGoods(type) {
            const page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.data.list);
                this.goods[type].page +=1;

                //只有结束当前加载，才能再一次加载更多
                this.$refs.scroll.finishPullUp()
               
            })
        },
        tabclick(index) {
            switch(index)
            {
                case 0:
                this.currenttype='pop'
                break
                case 1:
                this.currenttype= 'new'
                break
                case 2:
                this.currenttype='sell'
                break
            }

        },
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        },

        //   返回顶部按钮滑动大于1000px时显示
        contentscroll(position){
           this.isshowback = (-position.y) > 1000
        },
        //加载更多，可以直接调用加载数据函数
        loadmore() {
            this.getHomeGoods(this.currenttype)
        },

        
    }
}
</script>

<style scoped>
    #home {
        height: 100vh;
        position: relative;
        
    }

    .scroll-content {
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }

    .tab-contral0 {
        position: relative;
        z-index: 100;
    }
</style>
