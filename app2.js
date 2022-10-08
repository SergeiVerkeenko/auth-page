const btn = document.querySelector('.btn');

function checkEnter(inputEmail, inputPassword, inputPasswordCheck) {
    try {
        if (!/^\+[0-9]{12}|^[\w\.\_]+@[a-z]+\.[a-z]{2,4}$/g.test(inputEmail)) throw new Error('Не корректный e-mail')
        if (!(inputPasswordCheck == inputPassword)) throw new Error('Пароли не совпадают')
        return alert('Вы успешно зарегистрированы')

    } catch (error) {
        return alert(error.message)
    }
}

btn.addEventListener('click', () => {
    const inputPasswordCheck = document.querySelector('.input-password-check').value
    const inputEmail = document.querySelector('.input-email').value
    const inputPassword = document.querySelector('.input-password').value
    checkEnter(inputEmail, inputPassword, inputPasswordCheck)
})

btn.addEventListener('mouseover', () => {
    let flag = true
    if (flag) {
        flag = false
        btn.style = 'background: #526fe2;';
    } else {
        flag = true
        btn.style = ' background: #4C70FF;';
    }

})