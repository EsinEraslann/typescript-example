"use strict";
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.
// Kodu buraya yazalım...
const ages = [];
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.
// Kodu buraya yazalım...
const gameBoard = [
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
];
// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.
// Kodu buraya yazalım...
const products = [];
let i = 0;
for (i; i < 10; i++) {
    products.push({
        name: "coffee",
        price: 12 + i,
    });
}
const getTotal = (parameter) => {
    let result = 0;
    parameter.forEach((prod) => {
        result += prod.price;
    });
    return result;
};
