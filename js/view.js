const { tsVoidKeyword } = require("@babel/types")

const view = {}
view.setActiveScreen = (screenName, fromCreate = false) => {
    switch(screenName) {
      case 'welcomeScreen':
        document.getElementById('app').innerHTML 
        = components.welcomePage
      break


      case 'registerPage': 
        document.getElementById("app").innerHTML = components.registerPage
        document.getElementById('redirect-login').addEventListener('click', () => {
          view.setActiveScreen('loginPage')
        })
        const registerForm = document.getElementById("register-information-box")
        registerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const dataRegister= {
          email: registerForm.email.value,
          username: registerForm.username.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        }
        controller.register(dataRegister)
        })
      break

      case 'loginPage' :
          document.getElementById("app").innerHTML = components.loginPage
          document.getElementById('redirect-register').addEventListener('click', () => {
            view.setActiveScreen('chatPage')
          })
          const loginForm = document.getElementById("login-information-box")
          loginForm.addEventListener('summit', (event) =>{
          const dataLogin = {
            email: loginForm.email.value,
            password: loginForm.password.value,
          }
          controller.login(dataLogin)
          })
      break

      case 'chatPage' :
        document.getElementById("app").innerHTML = components.chatPage
        const sendMessageForm = document.getElementById('send-message-form')
        document.getElementById("send-message-btn").addEventListener("submit", (event) => {
          event.preventDefault()
          const message = document.getElementById("send-message-btn").message.value
          const messageSend = {
            owner: model.currentUser.email,
            content: message,
          }

          const messageFromBot = {
            owner: 'bot',
            content: message,
          }

          if(message.trim() !== ''){
            view.addMessage(messageSend)
            view.addMessage(messageFromBot)
            sendMessageForm.message.value = ''
          }
          view.addMessage(messageSend)
        })
  }
}

view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerHTML = message
}

view.addMessage = (message) => {
  const messageWrapper = document.createElement('div')
  messageWrapper.classList.add('message')
  if (model.currentUser.email === message.owner) {
    messageWrapper.classList.add('message-mine')
    messageWrapper.innerHTML = `
      <div class="message-content">${message.content}</div>
    `
  } else{
    messageWrapper.classList.add('message-other')
    messageWrapper.innerHTML = `
      <div class="message-owner">${message.owner}</div>
      <div class="message-owner">${message.content}</div>
    `
  }
  document.querySelector('.list-message').appendChild(messageWrapper)
}

