export default {
    //  因为 addProduct 这个函数完成的是两个 任务 所以最好写在actions中;
    addProduct(context,obj) {
        let oldProduct = null;
        //查找之前数组中是否有这个商品
        for(let item of context.state.cartList){
            if(item.iid===obj.iid){
                oldProduct = item;
            }
        }
        if(oldProduct){
            //当商品已添加时
            // oldProduct.count += 1
            context.commit('addCounter',oldProduct)
        }else{
            //当商品没有添加时，给oldProduct 添加一个记录商品件数的 属性
            obj.count = 1;
            // state.cartList.push(obj);
            context.commit("addToCart",obj)
        }
    }
}