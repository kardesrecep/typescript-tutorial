"use strict";
// let variableName: type=value
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello";
console.log(greetings);
//burdan string methodlarina ulasabilriiz
//type belirtmemiz ayni zamanda o type ile kullancabielcegimiz
//methodlara da ulasmamiza imkan saglar
console.log(greetings.toUpperCase());
//number
var num = 9;
console.log(num);
var userId = 33.4565;
console.log(userId.toFixed(2));
//boolean
var isLoggedIn = false;
//any
//kullanimi pek onerilmez
//bilinmeyen type durumunda any kullanilir
//type degisimi durumunda hata almamamizi saglar
var hero = "Kara Murat";
hero = 67;
hero = false;
hero = {
    name: "John",
    age: 30,
    isAdmin: false
};
var arr = ["john", 213, true];
console.log(arr);
console.log(hero);
