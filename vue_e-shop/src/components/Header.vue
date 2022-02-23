<template>
    <header>
      <input type="text" class="goods-search" v-model="searchValue" />
      <button class="search-button" @click="onClick" >Искать</button>
      <button class="cart-button" type="button" @click="$emit('toggle-cart')">Корзина</button>
    </header>
</template>

<script>
export default {
   data: () => ({
    searchValue: '',
  }),
  methods:{
    onClick(){
      this.$emit('filter-goods',this.searchValue);
    }
  },
  watch:{
    searchValue(){
      this.onClick();
    }
  }
}
</script>
<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  background-color: darkgray;
  padding: 10px 10px;
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

</style>