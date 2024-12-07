function addtothelist(){
   
let time =document.querySelector(".time")
let task =document.querySelector(".task")
let listul =document.querySelector(".listul")

    console.log(time.value+task.value)
    let li=`<li class='item'>${task.value} : ${time.value}<button class='done'><img src='correct.png' onclick='crossout(event)' class='correctimg' alt=''></button> <button class='delete'><img onclick='remove(event)' src='cancel.png' class='cancelimg' alt=''></button> </li>`
    if(task.value!=""&&time.value!=""){
        listul.innerHTML+=li
    time.value=""
    task.value=""
    }
}

function remove(event){
console.log(event.target.parentElement.parentElement)
event.target.parentElement.parentElement.remove()
}
function crossout(event){
   event.target.parentElement.parentElement.style.textDecoration="line-through"
   
}
// for(let i =0;i<deletebuttons.length-1;i++){
//     deletebuttons[i].addEventListener("click",remove)
// }