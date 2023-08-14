"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//return
function addTwo(a, b) {
    return a + b;
}
//functionun geriye donus degerini de belirtebiliriz
console.log(addTwo(5, 9));
function getLower(param) {
    return param.toLowerCase();
}
console.log(getLower('HELLO World'));
//void
function read() {
    console.log("Champion Fenerbahce");
}
read();
//example
/* function adSoyad(ad:string,soyad:string):string {
    
return ad+ " - "+soyad;

}

console.log(adSoyad("Ali","Can")) */
function adSoyad(ad, soyad) {
    if (soyad === void 0) { soyad = "Kemal"; }
    return ad + " - " + soyad;
}
console.log(adSoyad("Ali", "Jabbar"));
