<template>
  <div id="app">
    <Header @toggle-cart="toggleCartStatus" @filter-goods="filterGoods" />
    <main>
      <GoodsList @add-to-cart="addToCart" :goods="filteredGoods" />
      <Cart :makePOSTRequest="makePOSTRequest" :getCart="getCart" :cartGoods="cartGoods" :isVisibleCart="isVisibleCart" />
    </main>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import GoodsList from './components/GoodsList.vue';
import Cart from './components/Cart.vue';


const API_URL = "http://localhost:3000";

export default {
  components:{
    Header,
    GoodsList,
    Cart,
  },
  data: () => ({
    goods: [],
    filteredGoods: [],
    cartGoods:[],
    isVisibleCart:false,
  }),
  mounted() {
    this.getGoods();
    this.getCart();
  },
  methods: {
    addToCart(item){
      this.makePOSTRequest(`${API_URL}/addToCart`,item)
        .then(()=> this.getCart())
    },
    makeGETRequest(url) {
      return fetch(url)
        .then((data) => data.json())
    },
     makePOSTRequest(url,data) {
      return fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
        .then((data)=>data.json())
    },
    getGoods(){
      this.makeGETRequest(`${API_URL}/catalogData`)
        .then( (data) => {
        this.goods = data;
        this.filteredGoods = data;
        });
    },
    getCart(){
      this.makeGETRequest(`${API_URL}/cartData`)
        .then((data)=> {
          console.log(data)
          this.cartGoods = data
        })
    },
    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
    toggleCartStatus(){
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  max-width: 1600px;
  margin: 0 auto;
}

input:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}

main {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
}

</style>
