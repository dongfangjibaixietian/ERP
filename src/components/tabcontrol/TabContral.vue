<template>
<div class="tab-contral">
<div v-for="(item,index) in titles" class="tab-contral-item"
:class="{active: index === currentIndex}" @click="itemclick(index)"
>
<span>{{item}}</span>
</div>

</div>
</template>


<script>
export default {
    name: "TabContral",
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data: function() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        itemclick: function (index) {
            this.currentIndex = index;
            this.$emit('tabclick',index)
        }
    }
}
</script>


<style scoped>
.tab-contral {
    display: flex;
    text-align: center;
    font-size: 15px;
    z-index: 9;
}

.tab-contral-item {
    flex: 1;
    height: 40px;
    line-height: 44px;
}

.tab-contral-item span {
    padding: 5px;
}

.active {
    color: red;
}

.active span {
    border-bottom: 3px solid red;
}
</style>