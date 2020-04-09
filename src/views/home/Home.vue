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
        const refresh = this.debounce(this.$refs.scroll.refresh,2000)

        this.$bus.$on('itemload',() => {
            //利用事件总线，$on接受GoodList的$emit
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
        debounce(func, delay) {
            let timer = null;
            return function () {
                if(timer) clearTimeout(timer)
                timer = setTimeout(() => {
                    func
                },delay)
            }
        }
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
</style>
