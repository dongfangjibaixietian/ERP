<template>
    <div class="goodslist">
        <GoodsListItem v-for="item in goods" :goodsitem = item></GoodsListItem>

    </div>
</template>

<script>
    import GoodsListItem from './GoodsListItem.vue'

export default {
    name: "GoodList",
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>


<style>
    .goodslist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>