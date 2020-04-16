import BackTop from './backtop/BackTop.vue'


export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isshowback: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        },
       mounted() {
           console.log(混入);
           
       }
       
    }
   
    
}