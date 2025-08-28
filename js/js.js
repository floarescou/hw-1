let budget = +prompt("Ваш бюджет?");
let shopName = prompt("Название вашего магазина?");

let mainList = {
    budget: budget, shopName: shopName, shopGoods: [],
    employers: {name: "Alex", lastName: "Sviridov", age: 37}, open: true
};

for (let i = 0; i < 3; i++) {
    mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
}
console.log(mainList);

let oneDayBudget = mainList.budget / 30;

alert("Бюджет на один день = " + oneDayBudget.toFixed(1));