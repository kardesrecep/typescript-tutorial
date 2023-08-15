
//!functions
//?return
/* function addTwo(a:number,b:number):number {
    return a+b;
}

//functionun geriye donus degerini de belirtebiliriz
console.log(addTwo(5,9)) ;

function getLower(param:string) {
    
    return param.toLowerCase()
}

console.log(getLower('HELLO World'))
 */


//?void
/*function read():void {
    console.log("Champion Fenerbahce")
    
}
read()
 */
//!example

/* function adSoyad(ad:string,soyad:string):string {
    
return ad+ " - "+soyad;

}

console.log(adSoyad("Ali","Can")) */

/* function adSoyad(ad:string,soyad:string="Kemal"):string {
    
    return ad+ " - "+soyad;
    
    }
    
    console.log(adSoyad("Ali","Jabbar"))

    boyle bir durum oldugunda default olarak gonderilen deger sonradan
   verilen parametre tarafindan ezilir
 */

//!optional Parameters

/* function multiply(a:number,b:number,c?:number) {
    console.log(typeof c)
   if (typeof c !='undefined') {
     return a*b*c;
   }
   return a*b;
    
}
let val=multiply(2,6,9)
console.log(val) */

//!Arrow Functions
/* 
const sum = (a:number,b:number,c?:number):number => {
    if (typeof c !='undefined') {
        return a+b+c;
      }
      return a*b;

 }
 let val=sum(7,8,9)
 console.log(val)

 //tek satir kod oldugu  icin kisaltabiliriz
 //kendi icinde return var arrow functionun

 const splitt = (name:string):void => console.log(name.split(""))

splitt("TypeScript");
 */

//!Function overloading
//?ex-1
/* const add = (x:number,y:number):number => { 

    return x+y;

 }

let val=add(6,5)
console.log(val) */

//?ex-2
/* 
function add(x: string, y: string):string;
function add(x: number, y: number):number;
    

function add  (x:any,y:any):any { 

    return x+y

 }

let deger=add(7,9)
console.log(deger) */


//!Rest Parameters
//*rest parametreler bir fonksiyonun son argümanlarını temsil eder
//*fonksiyondaki herhangi bir argümandan sonra gelen tüm 
//*parametrelerin değerleri tek bir diziye toplar ve
//*toplamı döndürür
//?javadaki varargs gibi calisir kendinden sonra deger gelmez en sonda bulunur
//?kendinden once deger gelebilir
/* 
function total(a:string,...numbers:number[]) {
    console.log(a)
    let total=0
    numbers.forEach((num)=>total+=num)
    return total;
    
}

let val=total("ALi",1,2,3,7)
console.log(val) */

function birlestir(message:string,...names:string[]):string {

    return message+" "+names.join(" , ")
}
let val2=(birlestir("Hi","Ali","Osman","Tuba","Demet"))
console.log(val2)




/* 


function signUpUser(name:string,email:string,isLogin:boolean) {

    
}
 console.log(signUpUser("Alice","alice@wonderlan.com",true)) 

 let loginUser=(name:string,email:string,isLogin:boolean)=>{}

 loginUser("robby","rb@email.com",false) */



 export {}