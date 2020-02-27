export default {
    //   addProduct(state,obj) {
    //       state.cartList.forEach((item,index)=>{
    //           //如果商品已经添加
    //           if(item.iid==obj.iid){
    //             //   则商品数量加 1
    //               item.count ++;
    //               console.log("1")
    //           }else{
    //               // 如果商品还没有添加，则将商品添加到 cartList 数组中;
    //               state.cartList.push(obj);
    //               console.log("2")
    //           }
    //       });
    //       console.log("3")
    //   }

    //mutations 唯一的目的就是修改state中状态
    //mutations 中的每个方法尽可能完成的事件比较单一 一点; 
    addCounter(state, obj) {
        obj.count++ //这两个事件分开写
    }, // 就能更好的追踪 它们的变化
    addToCart(state, newObj) {
        newObj.isCheck = true;
        state.cartList.push(newObj)
    }
}