const goods = [
    { title: "Shirt", price: 150, img: "https://picsum.photos/200/150" },
    { title: "Socks", price: 50, img: "https://picsum.photos/200/150" },
    { title: "Jacket", price: 350, img: "https://picsum.photos/200/150" },
    { title: "Shoes", price: 250, img: "https://picsum.photos/200/150" },
];

const renderGoodsItem = (title = "Название товара не найдено", price = "Цена не найдена", img = "картинка не найдена") => `<div class="goods-item"><img class="img-item" src=${img}><h3 class="title">${title}</h3><p class="price">Цена: ${price}</p> <button class="add">Добавить</button></div>`;
const renderGoodsList = (list = []) => {
    let html = "";
    list.forEach(item => html += renderGoodsItem(item.title, item.price, item.img));
    document.querySelector('.goods-list').innerHTML = html;
}

renderGoodsList(goods);