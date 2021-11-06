
const view = {}
view.setActiveScreen = (screenName, fromCreate = false) => {
    switch(screenName) {
      // case 'welcomeScreen':
      //   document.getElementById('app').innerHTML 
      //   = components.welcomePage
      // break


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
            view.setActiveScreen('registerPage')
          })


          const loginForm = document.getElementById("login-information-box")
          loginForm.addEventListener('submit', (e) =>{
          e.preventDefault()
          const dataLogin = {
            email: loginForm.email.value,
            password: loginForm.password.value,
          }
          console.log(dataLogin);
          controller.login(dataLogin)
          })


      break;

      case 'chatPage' :
        document.getElementById("app").innerHTML = components.chatPage
        document.getElementById('register-btn').addEventListener('click', () => {
          view.setActiveScreen('registerPage')
        })
        document.getElementById('login-btn').addEventListener('click', () => {
          view.setActiveScreen('loginPage')
        })
        const sendMessageForm = document.getElementById('send-message-form')
        sendMessageForm.addEventListener("submit", (event) => {
          event.preventDefault()
          const message = sendMessageForm.message.value
          // console.log(message)
          const messageSend = {
            owner: model.currentUser.email,
            content: message,
            createAt: new Date().toISOString()
          }

          if(message.trim() !== ''){
            // view.addMessage(messageSend)
            // view.addMessage(messageFromBot)
            model.addMessage(messageSend)

            sendMessageForm.message.value = ''
          }
        })

        // lấy các cuộc hội thoại về
        model.getConversations()
        // lắng nghe các thay đôi trong cuộc hội thoại
        model.listenConversationChange()

      break
  }
}

view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerHTML = message
}

view.addMessage = (message) => {
  const messageWrapper = document.createElement('div')
  // messageWrapper.classList.add('message')
  if(model.currentUser.email === message.owner) {
    messageWrapper.classList.add('message-container-mine')
    messageWrapper.innerHTML = `
    <div class="message-contents">${message.content}</div>
    `
  } else {
    messageWrapper.classList.add('message-container-other')
    messageWrapper.innerHTML = `
    <div class="owner">${message.owner}</div>
    <div class="message-contents">${message.content}</div>
    `
  }
  console.log(messageWrapper)
  document.querySelector('.list-messages').appendChild(messageWrapper)
}

view.showCurrentConversation = () => {
  document.querySelector('.list-messages').innerHTML = ''
  document.querySelector('.list-users').innerHTML = ''
  document.querySelector('.conversation-title').innerHTML = model.currentConversation.title
  for(const oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage)
  }
  // for(const user of model.currentConversation.users) {
  //   view.addUser(user)
  // }
  // view.scrollToEndElm()
}

view.showListConversation = () => {
  for(const conversation of model.conversations) {
    view.addConversation(conversation)
  }
}

view.addConversation = (conversation) => {
  // tạo thẻ div
  const conversationWrapper = document.createElement('div')
  // thêm class
  conversationWrapper.classList.add('conversation')
  conversationWrapper.id = conversation.id
  if(conversation.id === model.currentConversation.id) {
    conversationWrapper.classList.add('current')
  }
  // sửa innerHTML
  conversationWrapper.innerHTML = `
  <div class="left-conversation-title">
    ${conversation.title}
  </div>
  <div class="num-of-user">
    ${conversation.users.length} users
  </div>
  <div class="notification"></div>
`

  // thêm lên trên giao diện
  document.querySelector('.list-conversations').appendChild(conversationWrapper)
  // console.log(conversationWrapper)
  conversationWrapper.addEventListener('click', () => {
    // xoa current class cu
    const current = document.querySelector('.current')
    current.classList.remove('current')
    // them current vao cai duoc click
    conversationWrapper.classList.add('current')
    // show conversation duoc click len man hinh
    for(const elm of model.conversations) {
      if(elm.id === conversation.id) {
        model.currentConversation = elm
        view.showCurrentConversation()
      }
    }
  })
}

view.scrollToEndElm = () => {
  const elm = document.querySelector('.list-messages')
  elm.scrollTop = elm.scrollHeight
}