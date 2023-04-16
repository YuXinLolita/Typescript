const center = {
    x: 0,
    y: 0,
    z: 0
}
// type Point = {
//     x:number,
//     y:number,
//     z:number
// }
type Point = typeof center
const unit: Point = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1
}
const personResponse = {
    name: "alex",
    email: "alex@imooc.com",
    firstName: "alex",
    lastName: "Liu"
}
type PersonResponse = typeof personResponse
function process(proson: PersonResponse) {
    console.log("全名： ", peoson.firstName)
}
typeof Person
//字符串不可修改
const alex = {
    name: "阿莱克斯",
    job: "developer"，
    arr: [1, 2, 3]
} as const //常量断言
alex = {
    name: "阿莱克斯",
    job: "developer"
}

alex.name = "jack"
alex.job = "teacher"
//example2
function layout(setting: {
    align: "left" | "center" " "left" //字面属性
    padding: name
}) {
    console.log("layout: ", setting)
}
const paramater = {
    align: "left" as const,
    padding: 0
}
layout(paramater)
//类型守卫
type Square = {
    size: number
}
type Rectangle = {
    width: number
    hight: number
}
function isSquare(shape: Shape): shape is Square {
    return "size" in shape
}
function isRectangle(shape: Shape): shape is Rectangle {
    return "width" in shape
}
type Shape = Square | Rectangle
function area(shape: Shape) {
    if (isSquare(shape)) {
        return shape.size * shape.size
    }
    if (isRectangle(shape)) {
        return shape.width * shape.hight
    }
}
//函数重载 function overload
function reverse(string: string): string
function reverse(array: string[]): string[]
function reverse(stringOrArray: string | string[]) {
    if (typeof stringOrArray == "string") {
        return stringOrArray.split("").reverse().join("")
    } else {
        return stringOrArray.slice().reverse()
    }
}
const hello = reverse("hello")
const helloArr = reverse(["h", "e", "l", "l", "o"])
function makeDate(timestemp: number): Date
function makeDate(year: number, month: number, day: number)
function makeDate(timestempOrYear: number, month?: number, day?: number) {
    if (month != null && day != null) {
        return new Date(timestempOrYear, month - 1, day)
    } else {
        return new Date(timestempOrYear)
    }
}
const day = makeDate(2021, 1, 1)
const day2 = makeDate(12345678910)
const day3 = makeDate(2021, 1)  //error
//调用签名
type Add = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
    debugName: string
}
const add: Add = (a: number, b: number, c?: number) => {
    return a + b + (c != null ? c : 0)
}
add.debugName = "附件信息"
// new 构造函数
type Point2 = {
    new { x: number, y: number }: { x: number; y: number }
new { x: number, y: number, z: number } : { x: number; y: number, z: nummber }
}
const point = class {
    constructor(public x: number, public y: number, public z?: number) { }
}
//索引签名
const obj = {
    hello: "world"
}
const dddd = obj["hello"]
const nums = {
    1234: "leet"
}
console.log(nums[1234])
type Dictionary = {
    [index: string]: any
}
type Person = {
    name: string,
    email: string
}
type PersonDictionary = {
    [username: string]: Person
}
const persons: PersonDictionary = {
    alex: {
        name: "阿莱克斯",
        email: "alex@163.com",
    },
    micheal: {
        name: "jackson",
        email: "mi@imooc.com"
    }
}
const alex2 = persons["alex"]
persons["ddd"] = {
    name: "alaikesi",
    email: "alaikesi@163.com"
}
delete persons["alex"]
const abc = persons["missing"] //undefind
abc.name //不报错
//readonly 函数副作用
function reverseSorted(input: readonly number[]): number[] {
    //return input.sort().reverse()
    //return input.slice.sort().reverse()    
    return [...input].sort().reverse()
}
const started = [1, 2, 3, 4, 5]
const result = reverseSorted(started)
console.log(started)  //54321
console.log(result) //54321
//双重断言
type Point2D = { x: number; y: number }
type POint3D = { x: number; y: number; z: number }
type Person3 = { name: string; email: string }
let point2: Point2D = { x: 0, y: 0 }
let point3: POint3D = { x: 10, y: 10, z: 10 }
let person: Person = { name: "alex", email: "alex@imooc.com" }
point2 = point3
point3 = point2
point3 = point2 as POint3D
person = point3
point3 = person
point3 = person as POint3D
point3 = person as any as POint3D
//常量断言
let king = "elvis" //猫王
king = "alex"
king[2]  //"e"
//javascript 中字符串不可修改，immutable
const alex3 = {
    name: "阿莱克斯",
    job: "developer"
}
alex4 = {
    name: "阿莱克斯2",
    job: "developer2"
}
function layout(setting: {
    align: "leftl" | "center" | "left"；
    padding: "number"
})
//this 关键词
function double(this: { value: number }) { //this 必须是参数
    this.value = this.value * 2
}
const vaild = {

    value: 10,
    double,
}
vaild.double()
vaild.value //20
const invaild = {
    value: 10,
    double
}
invaild.double() //error
//keyof 操作符
type Person4 = {
    name: string;
    age: number;
    location: string
}
const alex5: Person4 = {
    name: "alex",
    age: 30,
    location: "广州"
}
type PersonKey = keyof Person4
// function getValueByKey(obj:any, key: keyof Person4) {
//     const value = obj[key];
//     return value
// }  //原先
function getValueByKey<Obj, Key extends Obj>(obj: Obj, key: Key) {
    const value = obj[key];
    return value
}
const age = getValueByKey(alex5, "age")
const email = getValueByKey(alex, "email")  //未定义，不会报错
function setValeByKey<Obj, Key extends keyof Obj>(
    obj: Obj,
    key: Key,
    value: Obj[Key]
) {
    obj[key] = value
}
setValeByKey(alex, "age", 18)
//lookuptypes 类型查找
//提交给服务器端的数据结构
export type RequestData = {
    payment: {  //信用卡
        creditardNumber: string;
        alipay: string
    }
}
type PaymentREquest = {
    creditardNumber: string
}
// function getPayment(): PaymentREquest {
//     return {creditardNumber:"1234567890"}
// }
function getPayment(): RequestData["payment"] {
    return {
        creditardNumber: "1234567890",
        alipay: "666"
    }
}
function getAddress(): RequestData["user"]["address"][0] {
   return {
    stress:"太古广场",
    unitNumber:"1号",
    city:"广州",
    provance:"广东",
    country:"中国"
   } 
}
//类型映射 MappedTypeds
type point4 = {
    x: number ;
    y: number ;
    z: number;
}
// export type Readonly<T> = {
//     readonly [key in keyof T] : T[key] 
// }
// type ReadonlyPoint = {
//     //[item in "x" | "y" | "z"] : number  
//     readonly   [item in keyof Point4] : point4[key]  
//     // readonly x :number ;
//     // readonly y: number ;
//     // readonly z: number
// }
const center2: Readonly<point4> = {
    x:  "0" ,
    y:  0 ,
    z:  0 ,
}
center.x = 100 //error
type Point5 = {
    readonly x : number ;
    y?: number
}
type Mapped<T> = {
    -readonly [p in keyof T]  -?: T[p]
    //
}
type Result2 = Mapped<Point5>
//
 export class State<T> {
    constructor (public current: T) {}
    update(next: Partial<T>) {
        this.current = { ...this.current, ...next}
    }
 }
//  export type Partial<T> = {
//     [P in keyof T] ?: T[P]
//  }
 const state = new State({x: 0 , y: 0})
 state.update({x: 0 , y: 123})
 console.log(state.current) //{x: 0 , y: 123}
