const center = {
    x:0 ,
    y:0,
    z:0
}
// type Point = {
//     x:number,
//     y:number,
//     z:number
// }
type Point = typeof center
const unit: Point = {
    x:center.x + 1,
    y:center.y + 1,
    z:center.z + 1
}
const personResponse = {
    name: "alex",
    email:"alex@imooc.com",
    firstName:"alex",
    lastName:"Liu"
}
type PersonResponse = typeof personResponse
function process (proson:PersonResponse) {
    console.log("全名： ",peoson.firstName)
}
typeof Person