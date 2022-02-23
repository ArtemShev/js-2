<template>
    <div v-show="isVisibleCart" class="cart">
        <span class="cart-title">Корзина:</span>
        <div class="cart-list">
          <div v-for="item in cartGoods" :key="item.id_product" class='goods-item'>
            <img class="img-item" src="https://picsum.photos/200/150" />
            <h3 class="title">{{item.product_name}}</h3>
            <p class="price">{{item.price}}</p>
            <button  class="add" @click="onClick(item)">Удалить</button>
          </div>
        </div>
    </div>
</template>
<script>
const API_URL = "http://localhost:3000";

export default {
    props:{
        isVisibleCart:{
            type: Boolean,
            default:false,
        },
        cartGoods:{
          type: Array,
          default: () => ([]),
        },
        makePOSTRequest:{
          type: Function,
          default: ()=> null
        },
        getCart:{
          type: Function,
          default: ()=> null
        }
    },
    methods:{
      onClick(item){
        this.makePOSTRequest(`${API_URL}/deleteFromCart`,item)
          .then(()=> this.getCart())
      }
    }
}
</script>
<style scoped>
.cart{
    border: 1px solid black;
    position: absolute;
    padding: 30px;
    max-width: 1600px;
    background-color: white;
    overflow: auto;

}
.goods-item {
  border: solid 1px black;
  padding: 15px;
  justify-content: center;
  margin: 20px;
}

.title {
  margin-top: 5px;
  text-align: center;
}

.price {
  text-align: center;
  min-width: 67px;
}

.add{
  margin-left: 115px;
  margin-top: 20px;
  border-radius: 15px;
  padding: 5px 10px;
}

.cart-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.delete {
  margin-left: 115px;
  margin-top: 20px;
  border-radius: 15px;
  padding: 5px 10px;
}

.cart-title {
  margin-top: 30px;
  padding-top: 15px;
}
</style>