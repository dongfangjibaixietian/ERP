export default {
    addCart(context, payload) {
        let oldProduct = null;
        for (let item of context.state.cartList){
          if(item.iid === payload.iid)
          {
            oldProduct = item;
          }
        }
  
        if(oldProduct) {
          context.commit('addCounter', oldProduct)
        } else {
          payload.count = 1;
         context.commit('addToCart',payload)
        }
      }
}