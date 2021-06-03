<template>
    <div v-show="isVisibleCart" class="cart">
        <span class="cart-title">Корзина:</span>
        <div class="cart-list"></div>
    </div>
</template>
<script>
export default {
    props:{
        isVisibleCart:{
            type:Boolean,
            default:false,
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