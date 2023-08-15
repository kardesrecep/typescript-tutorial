//? let variableName: type=value

let greetings: string = "Hello";
console.log(greetings);
//burdan string methodlarina ulasabilriiz
//type belirtmemiz ayni zamanda o type ile kullancabielcegimiz
//methodlara da ulasmamiza imkan saglar
console.log(greetings.toUpperCase());

//!number

let num: Number = 9;
console.log(num);

let userId: number = 33.4565;

console.log(userId.toFixed(2));

//!boolean
let isLoggedIn: boolean = false;

//!any

//kullanimi pek onerilmez
//bilinmeyen type durumunda any kullanilir
//type degisimi durumunda hata almamamizi saglar

let hero: any = "Kara Murat";
hero = 67;
hero = false;
hero = {
  name: "John",
  age: 30,
  isAdmin: false,
};

let arr: any[] = ["john", 213, true];
console.log(arr);

console.log(hero);

//!array
//*1.yol
let meyve: string[] = ["elma", "ayva", "muz"];

//*2.yol
let sebze: Array<string> = ["havuc", "kabak", "biber"];
console.log(sebze);
console.log(meyve);

let arr2 = [1, 3, 6, "Apple", "Samsung", true];
console.log(arr2);

let languages: Array<string>;
languages = ["Js", "java", "Python"];

let ids: Array<number>;
ids = [1, 2, 3, 4, 5, 6];

//!Multiply arrays
//birden cok type icermesi durumunda

let values: (string | number | boolean)[] = ["apple", 34, true, "banan", 2 < 4];
console.log(values);

let values2: Array<string | number | boolean> = [
  "apple",
  34,
  true,
  "banan",
  2 < 4,
];
console.log(values[1]);
values2.forEach(element => {
    console.log(element)
});

//!never
//=> geriye hicbir value donmezse hata firlatir
function throwError(errorMsg:string):never {
    
    throw new Error(errorMsg);
}

throwError("hata")

//!void 
//geriye undefined dondurur

//let something:void = null;

/* Kodunuzda bir hata var.  let something:void = null;  ifadesi geçerli bir JavaScript kodu değildir.  void  bir veri türü değildir ve  let  anahtar kelimesi bir değişken tanımlamak için kullanılırken,  void  anahtar kelimesi bir
 işlevin geri dönüş değerini belirtmek için kullanılır.  */


//never data turunu null ve undefined bile atanamaz sadece hata dondurur
// let nothing: never=;

//!Type inference
/*
Türkçe olarak açıklamak gerekirse, "type inference" 
veya Türkçe adıyla "tür çıkarımı", programlama dillerinde
 bir değişkenin veri türünü otomatik olarak belirlemek 
 için kullanılan bir özelliktir. Değişkenin atanan değeri
  veya kod içinde nasıl kullanıldığı
  na bakarak, derleyici veya yorumlayıcı veri türünü
   otomatik olarak çıkarabilir.

Tür çıkarımı, değişkenin türünü açık bir şekilde bel
irtmek yerine, dilin bağlamı analiz ederek uygun türü
 çıkarabilmesini sağlar.

Tür çıkarımı, kodun daha kısa ve okunabilir olmasını
 sağlayarak açık tür belirtimlerinin miktarını azaltır. Ayrıca,
  çıkarılan türün beklenen türle uyumlu olup olmadığı derleme sırasında 
  kontrol edildiği için, türle ilgili hataların tespit edilmesine yardımcı olur.

TypeScript, Kotlin ve Swift gibi birçok modern programlama dili,
 tür çıkarımını desteklemektedir. Bu sayede geliştiriciler,
 işken için ayrı ayrı tür belirtmek zorunda kalmadan kod yazmayı kolaylaştırır.

*/
//herhangi bir tanimlama yapmadik fakat typsescript bunun number oldugu
//cikarimina vardi

let sayac=0;
console.log(typeof(sayac))

//return type vermdigimiz halde cikarim yapti ve number olarak kabul etti
function increment(counter:number) {
    return counter ++;
    
}

console.log(increment(9))

/* let x="some text";
let y=123;
x=y;
 */


function sum(a:number,b:number) {
    return a+b
    
}

let toplam=sum(4,7)


export {};
