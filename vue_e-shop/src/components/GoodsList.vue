<template>
<div>
    <span class="goods-title">Товары:</span>
      <div class="goods-list">
        <div
          v-for="item in goods"
          :key="item.id_product"
          class="goods-item"
        >
          <img class="img-item" src="https://picsum.photos/200/150" />
          <h3 class="title">{{ item.product_name }}</h3>
          <p class="price">Цена: {{ item.price }}</p>
          <button class="add">Добавить</button>
        </div>
      </div>
</div>
</template>

<script>
export default {
    props:{
        goods:{
            type: Array,
            default:()=>[],
        }
    }
}
</script>
<style scoped>
.goods-title {
  margin-top: 20px;
}
.goods-list {
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

.add{
  margin-left: 115px;
  margin-top: 20px;
  border-radius: 15px;
  padding: 5px 10px;
}
</style>