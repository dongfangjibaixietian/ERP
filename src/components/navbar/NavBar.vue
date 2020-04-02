<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NarBar"
    }
</script>

<style>
.nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: pink;
    position: relative;
    z-index: 10;
    
    
}

.left {
    width: 60px;
    height: 44px;
    line-height: 44px;
}

.right {
    width: 60px;
    height: 44px;
    line-height: 44px;
}

.center {
    flex: 1;
    height: 44px;
    line-height: 44px;
}
</style>