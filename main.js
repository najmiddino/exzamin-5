let btn = document.querySelector('.for')

let login = document.querySelector('.login');
let password = document.querySelector('.password');

let text = document.querySelector('.text')
let div = document.querySelector('.savol_divi')


btn.addEventListener('click', () => {
    if (login.value === '123456'  && password.value === '7890') {
        alert('id va password togri')
        
    } else {
        alert('id yoki pasword hato')
    }
    
})

let qop = document.querySelector('.qop')




qop.addEventListener( 'click' , () => {
    let str = document.createElement('p')
    let a = prompt("js ga oid savol kiriting")
    str.innerHTML = a
    div.appendChild(str)
})