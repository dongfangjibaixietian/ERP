<template>

    <nav-bar>
        <div slot="left" class="back" @click="backhome">
            <img src="../../../assets/img/back (2).png" alt="">
        </div>

        <div slot="center" class="title">
        <div 
        v-for = "(item, index) in titles" 
        class="title-item"
        :class="{active:index === currentindex}"
        @click="itemclick(index)">
        {{item}}
    </div>
    </div>

</nav-bar>
</template>


<script>
    import NavBar from '../../../components/navbar/NavBar.vue'


export default {
    name: 'DetailNavBar',
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentindex: 0
        }
    },
    methods: {
        itemclick(index) {
            this.currentindex = index;
            this.$emit('itemclick', index)
        },
        backhome() {
            this.$router.back()
        }
    },
    components: {
        NavBar
    }
}
</script>


<style>
.title {
    display: flex;
    font-size: 17px;
}
.title-item {
    flex: 1;
}

.active {
    background-color: ivory;
}

.back img {
    width: 20px;
    background-size: 30px;
}

</style>