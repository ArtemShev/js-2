<template>
  <div id="app">
    <header>
      <input type="text" class="goods-search" v-model="searchLine" />
      <button class="search-button" @click="filterGoods" >Искать</button>
      <button class="cart-button" type="button ">Корзина</button>
    </header>
    <main>
      <span class="goods-title">Товары:</span>
      <div class="goods-list">
        <div
          v-for="item in filteredGoods"
          :key="item.id_product"
          class="goods-item"
        >
          <img class="img-item" src="https://picsum.photos/200/150" />
          <h3 class="title">{{ item.product_name }}</h3>
          <p class="price">Цена: {{ item.price }}</p>
          <button class="add">Добавить</button>
        </div>
      </div>
      <span class="cart-title">Корзина:</span>
      <div class="cart-list"></div>
    </main>
  </div>
</template>

<script>
const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

export default {
  data: () => ({
    goods: [],
    filteredGoods: [],
    searchLine:'',
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
    filterGoods() {
        const regexp = new RegExp(this.searchLine, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
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

header {
  display: flex;
  justify-content: flex-end;
  background-color: darkgray;
  padding: 10px 10px;
}

input:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}

.cart-button,
.search-button {
  border-radius: 15px;
  padding: 5px 10px;
}

.search-button {
  margin-right: 5px;
}

.goods-search {
  margin: 0 5px 0 0;
  border-radius: 15px;
  padding-left: 10px;
}

.goods-search :active,
:focus {
  border-color: cornsilk;
}

main {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
}

.goods-title {
  margin-top: 20px;
}

.goods-list,
.cart-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.goods-item {
  border: solid 1px black;
  padding: 15px;
  justify-content: center;
  margin-top: 30px;
}

.title {
  margin-top: 5px;
  text-align: center;
}

.price {
  text-align: center;
  min-width: 67px;
}

.add,
.delete {
  margin-left: 115px;
  margin-top: 20px;
  border-radius: 15px;
  padding: 5px 10px;
}

.cart-title {
  border-top: 1px solid black;
  margin-top: 30px;
  padding-top: 15px;
}
</style>
