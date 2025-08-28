let budget = +prompt("Ваш бюджет?");
let shopName = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
    budget: budget, shopName: shopName, shopGoods: [],
    employers: {}, open: true
};

for (let i = 0; i < 5; i++) {
    // mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
    let goodsTypes = prompt("Какой тип товаров будем продавать?");


    if ((typeof(goodsTypes)) === 'string' && (typeof(goodsTypes)) === null && goodsTypes !== '' && goodsTypes.length < 50) {
        console.log("Все верно");
        mainList.shopGoods[i] = goodsTypes;
    } else {

    }
}

if (time < 0) {
    console.log("Такого не может быть");
} else if (time > 8 && time < 20) {
    console.log("Время работать");
} else if (time < 24) {
    console.log("Уже очень поздно");
} else {
    console.log("В сутках только 24 часа");
}
console.log(mainList);

let oneDayBudget = mainList.budget / 30;

alert("Бюджет на один день = " + oneDayBudget.toFixed(1));