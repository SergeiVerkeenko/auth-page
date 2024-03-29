const btn = document.querySelector('.btn');

function checkEnter(inputEmail, inputPassword, inputPasswordCheck) {
    try {
        if (!/^\+[0-9]{12}|^[\w\.\_]+@[a-z]+\.[a-z]{2,4}$/g.test(inputEmail)) throw new Error('Не корректный e-mail')
        if (!(inputPasswordCheck == inputPassword)) throw new Error('Пароли не совпадают')

    } catch (error) {
        return alert(error.message)
    }
}

btn.addEventListener('click', () => {
    const inputPasswordCheck = document.querySelector('.input-password-check').value
    const inputEmail = document.querySelector('.input-email').value
    const inputPassword = document.querySelector('.input-password').value
    checkEnter(inputEmail, inputPassword, inputPasswordCheck)
    document.querySelector('.input-password-check').value = ''
    document.querySelector('.input-email').value = ''
    document.querySelector('.input-password').value = ''
    return alert('Вы успешно зарегистрированы')
})

btn.addEventListener('mouseover', () => {
    btn.style = 'background: #526fe2;';
})

btn.addEventListener('mouseout', () => {
    btn.style = 'background: #4C70FF;';
})
