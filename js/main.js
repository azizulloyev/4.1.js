var elInp =document.querySelector('.inp')
var arr=[0,0,0]
function oldinga(){
    arr.unshift(elInp.value)
    console.log(arr)
    elInp.value=''
}
function orqaga(){
    arr.push(elInp.value)
    console.log(arr)
    elInp.value=''
}