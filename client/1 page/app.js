const btn = document.querySelector('.btn');

function checkEnter(inputEmail, inputPassword) {

    try {
        if (!/^\+[0-9]{12}|^[\w\.\_]+@[a-z]+\.[a-z]{2,4}$/g.test(inputEmail)) throw new Error('Не корректный e-mail')
        if (!/[0-9]/g.test(inputPassword)) throw new Error('Не корректный пароль')

    } catch (error) {
        return alert(error.message)
    }
}

btn.addEventListener('click', () => {
    const inputEmail = document.querySelector('.input-email').value
    const inputPassword = document.querySelector('.input-password').value
    checkEnter(inputEmail, inputPassword)




    
    document.querySelector('.input-email').value = '';
    document.querySelector('.input-password').value = ''
    return alert('Вы успешно зарегистрированы')
})

btn.addEventListener('mouseover', () => {
    btn.style = 'background: #526fe2;';
})

btn.addEventListener('mouseout', () => {
    btn.style = 'background: #4C70FF;';
})
