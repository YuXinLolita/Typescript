//Generics 泛型
// let list2 : number[] = [1,2,3,4]
// let list3: array<string> = [1,2,3,4]
// let lastInArray = <T>(arr:Array<any>) => {
//         return arr[arr.length - 1]
// }
// let lastInArray2 = <T>(arr:T[]) => {
//     return arr[arr.length - 1]
// }
//const l1 = lastInArray ([1,2,3,4])
// const l2 = lastInArray2<string>(["a","b","c"])
// const l3 = lastInArray2<string | number>(["a","b","c"])
let makeTuple = <T , Y = number> (x: T, y: Y ) => {
    [x,y]
}
const v1 = makeTuple(1,"one")
const v2 = makeTuple<boolean , number>(true,1)
console.log(v1)
console.log(v2)