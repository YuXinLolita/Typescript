// const num3 = document.getElementById('num') as HTMLInputElement
// const num4 = document.getElementById('num2') as HTMLInputElement
// const button = document.getElementById('button') as HTMLButtonElement
// function add2(num:number , num2:number) {
//     return num+ num2
// }
// button.addEventListener('click',  () => {
//     console.log(add2(+num3.value , +num4.value))
// })
//let hello ="hello world"
// let hello = "我来了"
// console.log(hello)
var number2 = 10;
var number3 = 2;
// const number4 = 3 
//number4 = 4
function doSomeThing() {
    // for(var i = 0 ; i< 5;i++) {
    //     console.log(i)
    // }
    // console.log("finaly i = ",i)
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //  console.log("finaly i = ",i)
}
doSomeThing();
//变量声明
//Number 数字类型
//string, boolean
function add3(n1, n2) {
    return n1 + n2;
}
console.log(add3(number2, number3));
var isTrue = true;
//istrue = "true"
var total = 0;
var firstName = "阿莱克斯";
var str = "\u6211\u53EB".concat(firstName);
//数组（Array和元组（Tupple）
var list2 = [1, 2, 3, 4]; //定义数组
var List3 = [1, 2, 3, 4]; //定义数组
var list4 = [1, 2, 3, 4]; //定义数组
var list5 = [1, "ddd"];
var list6 = [1, "dss", true];
//Tiu tauple 元组
var peoson = [1, "阿莱克斯"];
// peoson[0] = "ddd"  //元组只能使用两个类型
// peoson[1] = 111  //元组只能使用两个类型
// peoson[2] = 111  //元组只能使用两个类型
// peoson[2] = 3   //元组只能使用两个类型
peoson.push(3); //元组可以通过此方法添加多个类型
var person2 = [1, "阿雷克斯"];
person2[0] = "ddd";
person2[1] = 11;
person2[2] = 5;
//联合类型（union） （Literal）
var union;
union = 2;
union = "abcdefgh";
//union = true
var union2;
function merge2(n1, n2, resultType) {
    if (resultType === "as-string")
        return n1.toString() + n2.toString();
    if (typeof n1 === "string" || typeof n2 === "string")
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
}
var megrNumber = merge2(2, 3, "as-number");
var mergeString = merge2("hello", "world", "as-string");
console.log(megrNumber);
console.log(mergeString);
//字面量类型
var union3;
union3 = 1;
//枚举类型
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var color = Color.blue;
console.log(color);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 5] = "red";
    Color2[Color2["green"] = 2] = "green";
    Color2[Color2["blue"] = 1] = "blue";
})(Color2 || (Color2 = {}));
var Color3;
(function (Color3) {
    Color3["red"] = "red";
    Color3["green"] = "green";
    Color3[Color3["blue"] = 1] = "blue";
})(Color3 || (Color3 = {}));
var color3 = Color3.green;
console.log(color3);
//any 和unknow 未知类型
var randomValue = 111;
randomValue = true;
randomValue = "abcd";
randomValue = {};
// randomValue() 
// randomValue.toUpperCase()
//避免类型错误
var randomValue2 = 111;
randomValue = true;
randomValue = "abcd";
randomValue = {};
if (typeof randomValue2 === "function") {
    randomValue2();
}
if (typeof randomValue2 === "string") {
    randomValue2.toUpperCase();
}
//void 
function printResult() {
    console.log("lalala");
}
function printResult2() {
    console.log("lalala");
    return;
}
console.log("hello ", printResult());
