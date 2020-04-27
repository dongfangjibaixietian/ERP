<template>
    <div class="cart-list">
        <scroll class="content">
            <li v-for = "item in cartList">{{item}}</li>
        </scroll>
        
    </div>
</template>



<script>
    import Scroll from '../../../components/scroll/Scroll.vue'

export default {
    name: "CartList",
    components: {
        Scroll
    },
    computed: {
        cartList () {
            return this. $store.getters.cartList
        }
    }
}

</script>


<style>
    .content {
        height: calc(100% - 44px);
    }

</style>