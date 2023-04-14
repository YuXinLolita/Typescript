const object = {
    hello: 'world'
}
const person: {
    firstName: string,
    lastName: string,
    age: number
} = {
    firstName: "阿莱克斯",
    lastName: "刘",
    age: 18
}
console.log(person.lastName)
//console.log(person.nickName)
//接口 interface 与 class
let drawPoint = (point: Point) => {
    console.log({ x: point.x, y: point.y })
}
drawPoint({ x: 105, y: 24 })
// drawPoint({ x: "阿莱克斯", y: "刘老师" })
// drawPoint({ weather: "干燥", temperature: "50c" })
let getDistances = (a:Point , b:Point) =>{
 // ......
}
interface Point {
    // x: number,
    // y: number
    // getX: () => {
    //     number
    // }
    X2:number
    getY:() => number
    //sexX: (value) => number 
     setY:(value) => void
    drawPoint: () =>{
        void
    }
    getDistances: (p: IPoint) => number
}
//高内聚，低耦合(不懂)   class
export class Point implements IPoint {
    //x:number 
    //y: number
    //Access Modifier 方位修饰符 ：public
    constructor(private x2:number,private y2:number = 2) {
        //this.x = x
        //this.y = y
    }
    drawPoint = () => {
        console.log("x2: ",this.x2," y2: ",this.y)
    }
    getDistances = (p:IPoint) => {
        return Math.pow(p.X-this.x2, 2) + Math.pow (p.getY - this.y2, 2)
        return 0
    }
    // setX = (value:number) => {
    //     if(value < 0) {
    //         throw new Error("value不能小于0")
    //     }
    //     this.x = value
    // }
    // getX = () => {
    //     return this.x
    // }
    set X (value:number)  {
        if(value < 0) {
            throw new Error("value不能小于0")
        }
        this.x = value
    }
    get X  ()  {
        return this.x
    }
    setY = (value:number) => {
        if(value < 0) {
            throw new Error ("value不能小于0")
        }
        this.y = value
    }
    getY = () => {
        return this.y
    }
} //class 这一章节未看
const point = new  Point (24,50) 
point.x = 30 
point.y = 5 
point.x = 5
point.setX (10)
point.setX (-9)
//public,private 共有属性 私有属性 
point.X = 19 
console.log(point.X)

