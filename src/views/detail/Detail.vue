<template>
<detail-nav-bar></detail-nav-bar>
</template>


<script>
    import DetailNavBar from './childComps/DetailNavBar.vue'
    import {getDetail} from '../../network/detail'
    
    
    export default {
        name: 'Detail',
        components: {
            DetailNavBar
        },
        data() {
            return {
                iid: null
            }
        },
        created() {
            //保存传入的iid
            this.iid = this.$route.params.iid

            //根据iid请求数据，方法在network中定义
            getDetail(this.iid).then(res => {
                console.log(res);
            })
        },
        
    }
</script>



<style>

</style>