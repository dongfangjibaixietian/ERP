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
        path: String,
        activeColor: {
            type: String,
            default: "red"
        }
    },
    data: function() {
        return {
            isActive: true
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexof(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path)
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