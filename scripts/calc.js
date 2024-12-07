function foo() {
getbuttons()

    let x = parseInt(inputx.value)
    let y = parseInt(inputy.value)
    p.innerHTML = x + y
}

function minus() {
    getbuttons()
    let x = parseInt(inputx.value)
    let y = parseInt(inputy.value)
    p.innerHTML = x - y
}

function multiply() {
    getbuttons()
    let x = parseInt(inputx.value)
    let y = parseInt(inputy.value)
    p.innerHTML = x * y
}

function division() {
    getbuttons()
    let x = parseInt(inputx.value)
    let y = parseInt(inputy.value)
    if (y === 0) {
        p.innerHTML = "You cant divide by zero"
    } else {
        p.innerHTML = x / y
    }

}

function sqroot() {
    getbuttons()
    let x = parseInt(inputx.value)
    p.innerHTML = x * x
}

function sqr() {
    getbuttons()
    let x = parseInt(inputx.value)


    if (x < 1) {
        p.innerHTML = "You cant sqrt from negative number"
    } else {
        p.innerHTML = Math.sqrt(x)
    }
}
let inputx
let inputy
let button
let p
function getbuttons(){
    inputx=document.querySelector(".x")
    inputy=document.querySelector(".y")
    button=document.querySelector(".cbutton")
    p=document.querySelector(".result")
}