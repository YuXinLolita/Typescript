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
let number3 = 2
// const number4 = 3 
//number4 = 4
function doSomeThing() {
    // for(var i = 0 ; i< 5;i++) {
    //     console.log(i)
    // }
    // console.log("finaly i = ",i)
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    //  console.log("finaly i = ",i)
}
doSomeThing()
//变量声明
//Number 数字类型
//string, boolean
function add3(n1: number, n2: number) {
    return n1 + n2;
}
console.log(add3(number2, number3))
let isTrue: boolean = true
//istrue = "true"
let total: number = 0
let firstName: string = "阿莱克斯"
let str = `我叫${firstName}`
//数组（Array和元组（Tupple）
let list2: number[] = [1, 2, 3, 4]  //定义数组
let List3: Array<number> = [1, 2, 3, 4] //定义数组
let list4 = [1, 2, 3, 4] //定义数组
let list5 = [1, "ddd"]
let list6: any[] = [1, "dss", true]
//Tiu tauple 元组
let peoson: [number, string] = [1, "阿莱克斯"]
// peoson[0] = "ddd"  //元组只能使用两个类型
// peoson[1] = 111  //元组只能使用两个类型
// peoson[2] = 111  //元组只能使用两个类型
// peoson[2] = 3   //元组只能使用两个类型
peoson.push(3)  //元组可以通过此方法添加多个类型
let person2 = [1, "阿雷克斯"]
person2[0] = "ddd"
person2[1] = 11
person2[2] = 5
//联合类型（union） （Literal）
let union: string | number
union = 2
union = "abcdefgh"
//union = true
let union2: number | string | boolean | string[]
function merge2(n1: number | string, n2: number | string,resultType:"as-number" | "as-string") {
    if(resultType === "as-string") 
        return n1.toString() + n2.toString()
    if (typeof n1 === "string" || typeof n2 === "string")
        return n1.toString() + n2.toString()
    else
        return n1 + n2

}
let megrNumber = merge2(2, 3,"as-number")
let mergeString = merge2("hello", "world","as-string")
console.log(megrNumber)
console.log(mergeString)
//字面量类型
let union3 : 0 | 1 | 2
union3 = 1
//枚举类型
enum Color {
    red,
    green,
    blue
}
let color = Color.blue
console.log(color)
enum Color2 {
    red = 5 ,
    green = 2,
    blue = 1
}
enum Color3 {
    red = "red" ,
    green = "green" ,
    blue = 1
}
let color3 = Color3.green
console.log(color3)
//any 和unknow 未知类型
let randomValue : any = 111 ;
randomValue = true 
randomValue = "abcd" 
randomValue = {} 
// randomValue() 
// randomValue.toUpperCase()
//避免类型错误
let randomValue2 : unknown = 111 ;
randomValue = true 
randomValue = "abcd" 
randomValue = {} 
if(typeof randomValue2 === "function")
{
    randomValue2() 
}
if(typeof randomValue2 === "string") {
    randomValue2.toUpperCase()
}
//void 
function printResult() :void {
    console.log("lalala")
}
function printResult2() :undefined {
    console.log("lalala")
    return
}
console.log("hello ",printResult2())
function throwError(message:string ,errorCode :number) {
    throw {
        message ,
        errorCode
    }
}
throwError("Not fount ",404)
function whileLoop() :never {   //never 一般用来处理异常
    while(true) {
        console.log("haha")
    }
}
//类型适配  （类型断言）
let message2 : any 
message2 = "anc" 
message2.endsWith("c")
let ddd =  (<string>message2).endsWith("c") //转化成了string类型
let ddd2 = (message2 as string).endsWith("c")
//函数类型
let log = function (message3) {
    console.log(message3)
}
let log2 = (message2 :string) => console.log(message2)
log2("hello")
log2(2)
log2(true)
// let log3 = (message2:string ,code?:number) =>{
//     console.log(message2.code)
// }
let log3 = (message2:string ,code?:number) =>{   //加问号 是可选参数

    console.log(message2,code)
}
let log4 = (message2?:string  ,code:number  ) =>{  //参数默认从后往前开始
    console.log(message2,code)
}
log3("hello" ,3)