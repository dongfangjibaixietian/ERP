<template>
    <div class="cart">
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
    </div>
    
</template>


<script>
    import NavBar from '../../components/navbar/NavBar.vue'

    export default {
        name: "Cart",
        components: {
            NavBar
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