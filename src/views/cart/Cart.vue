<template>
    <div class="cart">
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>

        <cart-list></cart-list>
    </div>
    
</template>


<script>
    import NavBar from '../../components/navbar/NavBar.vue'
    import CartList from './childComps/CartList.vue'

    export default {
        name: "Cart",
        components: {
            NavBar,
            CartList
        },
        computed: {
            cartLength () {
                return this.$store.getters.cartLength
            }
        }
    }
</script>


<style>

</style>