<template>
    <div id="home">
    <nav-bar><div slot="center">ERP物料</div></nav-bar>
    <recommend-view></recommend-view>

    </div>
</template>

<script>
    import NavBar from '../../components/navbar/NavBar.vue'
    import {getHomeMultidata} from '../../network/home'
    import RecommendView from './childComps/RecommendView.vue'
    import Swipe from '../../components/swipe/Swipe.vue'

    export default {
    name: 'Home',
    components: {
        NavBar,
        RecommendView,
        Swipe
    },
    data() {
        return {
            banners: [],
            recommends: [],
        }
    },
    created() {
        getHomeMultidata().then(res => {
            this.banners = res.data.banner;
            this.recommends = res.data.recommends 
        })
    }
}
</script>

<style>

</style>