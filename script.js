class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item"><img class="img-item" src=${this.img}><h3 class="title">${this.title}</h3><p class="price">Цена: ${this.price}</p> <button class="add">Добавить</button></div>`;
    }
}
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: "Shirt", price: 150, img: "https://picsum.photos/200/150" },
            { title: "Socks", price: 50, img: "https://picsum.photos/200/150" },
            { title: "Jacket", price: 350, img: "https://picsum.photos/200/150" },
            { title: "Shoes", price: 250, img: "https://picsum.photos/200/150" },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml += goodItem.render()
        });
        document.querySelector('.goods-list').innerHTML = listHtml;

    }
    fullSum() {
        let sum = 0;
        this.goods.forEach(good => sum += good.price);
        console.log(sum);

    }

}
class CartItem extends GoodsItem {
    constructor(...args) {
        super(...args);
        this.count = 0;
    }
    addOne() {};
    removeOne() {};


}
class Cart extends GoodsList {
    constructor(...args) {
        super(...args);
    }
    clearCart() {};
    removeItem() {};
    addItem() {};
    cartSum() {};
}


const list = new GoodsList();
list.fetchGoods();
list.render();
list.fullSum()