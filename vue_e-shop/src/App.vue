<template>
  <div id="app">
    <Header @toggle-cart="toggleCartStatus" @filter-goods="filterGoods" />
    <main>
      <GoodsList :goods="filteredGoods" />
      <Cart :isVisibleCart="isVisibleCart" />
    </main>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import GoodsList from './components/GoodsList.vue';
import Cart from './components/Cart.vue';


const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

export default {
  components:{
    Header,
    GoodsList,
    Cart,
  },
  data: () => ({
    goods: [],
    filteredGoods: [],
    isVisibleCart:false,
  }),
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`);
  },
  methods: {
    makeGETRequest(url) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
        });
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
