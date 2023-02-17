// const btn = document.querySelector('#btn');
// const btnReg = document.querySelector('#btnReg');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('.errorMessage');
const errorMessageReg = document.querySelector('.errorMessageReg');
const emailReg = document.querySelector('#emailReg');
const passwordReg = document.querySelector('#passwordReg');
const formReg = document.querySelector('#formReg');
const formLog = document.querySelector('#formLog');

if (formLog) {
  formLog.addEventListener('click', async (event) => {
    event.preventDefault();
    const response = await fetch('/login', {
      method: 'post',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const responseJson = await response.json();
    console.log(responseJson.message);

    if (responseJson.message === 'true') {
      window.location.assign('/home');
    } else errorMessage.innerText = responseJson.message;
  });
}

if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(emailReg.value);
    const response = await fetch('/registration', {
      method: 'post',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        email: emailReg.value,
        password: passwordReg.value,
      }),
    });
    const responseJson = await response.json();
    console.log(responseJson.message);

    if (responseJson.message === 'true') {
      window.location.assign('/home');
    } else errorMessageReg.innerText = responseJson.message;
  });
}
