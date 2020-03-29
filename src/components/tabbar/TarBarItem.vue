<template>
<div class="tab-bar-item" @click="itemClick"> 
    <div v-show="!isActive">
        <slot name="item-icon"></slot>
    </div>

    <div v-show="isActive"><slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
        <slot name="item-text"></slot>
    </div>
   
</div>
</template>

<script>
export default {
    name: 'TarBarItem',
    props: {
        link: {
            type: String,
            required:true
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexof(this.link) !== -1
        },
        activeStyle() {
            return this.isActive ? {'color': 'red'} : {}
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.link)
        }
    }
   
}
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
}

.tab-bar-item img {
    width: 24px;
    height: 24px;
}

</style>