let slideElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#value');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@!#$%&';
let newPass = '';

sizePassword.innerHTML = slideElement.ariaValueMax;

slideElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function createPass(){
    let pass = ''
    for(let i = 0, n = charset.length; i < slideElement.value; i++)
    {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hide');

    password.innerHTML = pass;
}

function copyPass(){
    alert("Password was copied");
    navigator.clipboard.writeText(pass);
}