let login = document.querySelector("#loginlogin")
let logini = document.querySelector("#login")
let password = document.querySelector("#password")
let submit = document.querySelector(".submit")
let btn = document.querySelector(".btn")
let error = document.querySelector(".error")
let invalidsymbols = ["!", "@", "#", "$", "%", "^", "&", "*", " ", "~", "=", "+", "-", "_",]
let invalidsymbolsp = [" "]
let errorp = document.querySelector(".errorp")
let register = document.querySelector("#register")
let usersbase = {
    user1: {
        login: "KVAS",
        password: "2010X"
    }
}
function checkusers(login, password) {
    for (user in usersbase) {
        if (login === user.login) {
            console.log(login, password)
            console.log(user.login, user.password)
            if (password === user.password) {
                return true
            } 

        }
    }
}
submit.onclick = function (e) {
    if (login.value != "") {
        if (checksymbols(login.value, invalidsymbols)) {
            error.innerHTML = "login is valid"
            error.style.display = "block"
            error.style.color = "green"
        } else if (!checksymbols(login.value, invalidsymbols)) {
            error.innerHTML = "login is unvalid"
            error.style.display = "block"
            error.style.color = "red"
        }
    } else if (login.value == "") {
        error.innerHTML = "login is Empty"
        error.style.display = "block"
        error.style.color = "red"
    }
    if (password.value != "") {



        if (checksymbols(password.value, invalidsymbolsp)) {
            errorp.innerHTML = "Password is valid"
            errorp.style.display = "block"
            errorp.style.color = "green"
        } else {
            errorp.innerHTML = "Password is unvalid"
            errorp.style.display = "block"
            errorp.style.color = "red"
        }
    } else if (password.value == '') {
        errorp.innerHTML = "password is Empty"
        errorp.style.display = "block"
        errorp.style.color = "red"
    }
}
function checksymbols(text, symbols) {
    for (let sy of text) {
        if (symbols.includes(sy)) {
            return false
        }
    }
    return true
}
function registration() {
    logini.style.left = "-400px"
    register.style.left = "50px"
    btn.style.left = "110px"
}
function logino() {
    logini.style.left = "50px"
    register.style.left = "450px"
    btn.style.left = "0px"
}
let button = document.querySelector(".submit")
button.addEventListener("click", () => {
    if (checksymbols(login.value, invalidsymbols) == true && checksymbols(password.value, invalidsymbols) == true) {
        console.log(1)
        if (login.value != "" && password.value != "") {
            console.log(login.value,usersbase.login)
            console.log(password.value,usersbase.password)
            if (login.value===usersbase.user1.login&&password.value===usersbase.user1.password) {
                console.log(3)
                document.location.href = "index.html"
            }
        }

    }
})