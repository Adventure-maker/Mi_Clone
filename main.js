const signInBtn = document.getElementById('signInBtn')
const signUpBtn = document.getElementById('signUpBtn')
const modal = document.getElementById('modal')
const modalCopnt1 = document.getElementById('modal-cont1')
const modalCopnt2 = document.getElementById('modal-cont2')
const title = document.getElementById('title')

signInBtn.addEventListener('click', openModal1)

signUpBtn.addEventListener('click', openModal2)

function openModal1() {

    modal.style.display = 'flex'
    signInForm.setAttribute('class', 'active')
    modalCopnt1.style.display = 'block'
    modalCopnt2.style.display = 'none'
    signInForm.setAttribute('class', 'active')
    createAccountForm.removeAttribute('class', 'active')

    createAccountForm.addEventListener('click', openModal2)

    title.innerHTML = 'Mi Account - Sign in'
}

function openModal2() {
    modal.setAttribute('style', 'display: flex;')
    modalCopnt1.style.display = 'none';
    modalCopnt2.style.display = 'block';
    createAccountForm.setAttribute('class', 'active')
    signInForm.removeAttribute('class', 'active')
    
    signInForm.addEventListener('click', openModal1)
    title.innerHTML = 'Mi Account - Create an account'
}

const signIn = document.getElementById('signIn')
const signUp = document.getElementById('signUp')

let users = []
let flag = true

signIn.addEventListener('click', e => {
    e.preventDefault();
    
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    
    let user = {
        'email': email.value,
        'password': password.value
    }
    if (flag) {
        users.push(user);
        flag = false;
    }
    
    else if (users.some(x => x.email === user.email)) {
        alert("User exists")
    }
    
    setInterval(() => {
        modal.removeAttribute('style', 'display: flex;');
        signInBtn.style.display = 'none'
        signUpBtn.style.display = 'none'
        title.innerHTML = 'Xiaomi India | Mobile | TV | Smart Home | Lifestyle - Mi India'
    }, 3000);
})











// closing and opening vide modals

const video1 = document.getElementById('video1')
const video2 = document.getElementById('video2')
const video3= document.getElementById('video3')
const videoModal= document.getElementById('videoModal')
const videoCont1= document.getElementById('videoCont1')
const videoCont2= document.getElementById('videoCont2')
const videoCont3= document.getElementById('videoCont3')

video1.addEventListener('click', () => {
    videoModal.style.display = 'block'
    videoCont1.style.display = 'block'
    videoCont2.style.display = 'none'
    videoCont3.style.display = 'none'
})

video2.addEventListener('click', () => {
    videoModal.style.display = 'block'
    videoCont1.style.display = 'none'
    videoCont3.style.display = 'none'
    videoCont2.style.display = 'block'
})

video3.addEventListener('click', () => {
    videoModal.style.display = 'block'
    videoCont1.style.display = 'none'
    videoCont2.style.display = 'none'
    videoCont3.style.display = 'block'
})

function closeModal() {
    videoModal.style.display = 'none'
}