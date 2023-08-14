// let variableName: type=value

let greetings:string="Hello";
console.log(greetings)
//burdan string methodlarina ulasabilriiz
//type belirtmemiz ayni zamanda o type ile kullancabielcegimiz
//methodlara da ulasmamiza imkan saglar
console.log(greetings.toUpperCase())

//number

let num:Number=9;
console.log(num)

let userId:number=33.4565;

console.log(userId.toFixed(2))

//boolean
let isLoggedIn:boolean=false

//any

//kullanimi pek onerilmez
//bilinmeyen type durumunda any kullanilir
//type degisimi durumunda hata almamamizi saglar

let hero:any="Kara Murat";
hero=67;
hero=false;
hero={
    name:"John",
    age:30,
    isAdmin:false

}

let arr:any[]=["john",213,true];
console.log(arr)

console.log(hero)





export {}