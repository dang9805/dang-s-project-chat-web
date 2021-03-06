
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

        document.querySelector('#create-conversation-btn').addEventListener("click", ()=> {
          view.setActiveScreen("createConversationScreen")
        })
        const sendMessageForm = document.getElementById('send-message-form')
        sendMessageForm.addEventListener("submit", (event) => {
          event.preventDefault()
          const message = sendMessageForm.message.value
          // console.log(message)
          const messageSend = {
            owner: model.currentUser.email,
            content: message,
            createdAt: new Date().toISOString()
          }

          if(message.trim() !== ''){
            // view.addMessage(messageSend)
            // view.addMessage(messageFromBot)
            model.addMessage(messageSend)

            sendMessageForm.message.value = ''
          }
        })

        if(!fromCreate) {
          // lay cac cuoc hoi thoai ve
          model.getConversations()
          // lang nghe thay doi cua cac cuoc hoi thoai
          model.listenConversationChange()
        } else {
          view.showCurrentConversation()
          view.showListConversation()
        }

        const addUserForm = document.getElementById('add-user-form')
        addUserForm.addEventListener('submit', (e) => {
          e.preventDefault()
          const email = addUserForm.email.value
          if(email !== '') {
            model.addUser(email)
          }
          addUserForm.email.value = ''
        })
        document.querySelector('#send-message-form input').addEventListener('click', () => {
          view.hideNotification(model.currentConversation.id)
        })

        // // l???y c??c cu???c h???i tho???i v???
        // model.getConversations()
        // // l???ng nghe c??c thay ????i trong cu???c h???i tho???i
        // model.listenConversationChange()

        const mediaQuery = window.matchMedia('screen and (max-width: 768px)')
      console.log(mediaQuery)
      if(mediaQuery.matches) {
        document.querySelector('#create-conversation-btn').innerHTML ='<i class="fa fa-plus-circle" aria-hidden="true"></i>'
      }
      break

      case 'createConversationScreen' : 
        document.getElementById("app").innerHTML = components.createConversationScreen
        document.querySelector('#return-chat').addEventListener("click", ()=> {
          view.setActiveScreen("chatPage")
        })
        const createConversationForm = document.querySelector('.create-conversation-form')
        createConversationForm.addEventListener('submit', (event) => {
          event.preventDefault()
          const data = {
            title: createConversationForm.title.value,
            email: createConversationForm.email.value
          }
          controller.createConversation(data)
        })
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
  // console.log(messageWrapper)
  document.querySelector('.list-messages').appendChild(messageWrapper)
}

view.showCurrentConversation = () => {
  document.querySelector('.list-messages').innerHTML = ''
  document.querySelector('.list-users').innerHTML = '' // hi???n ??ang ko c?? class n??o t??n l?? list-users :))
  document.querySelector('.conversation-title').innerHTML = model.currentConversation.title
  for(const oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage)
  }
  for(const user of model.currentConversation.users) {
    view.addUser(user)
  }
  view.scrollToEndElm()
}

view.showListConversation = () => {
  for(const conversation of model.conversations) {
    view.addConversation(conversation)
  }
}

view.addConversation = (conversation) => {
  // t???o th??? div
  const conversationWrapper = document.createElement('div')
  // th??m class
  conversationWrapper.classList.add('conversation')
  conversationWrapper.id = conversation.id
  if(conversation.id === model.currentConversation.id) {
    conversationWrapper.classList.add('current')
  }
  // s???a innerHTML
  conversationWrapper.innerHTML = `
  <div class="left-conversation-title">
    ${conversation.title}
    <div class="notification"></div>
  </div>
  <div class="num-of-user">
    ${conversation.users.length} users
  </div>
`

  // th??m l??n tr??n giao di???n
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
    view.hideNotification(conversation.id)
  })
}

view.scrollToEndElm = () => {
  const elm = document.querySelector('.list-messages')
  elm.scrollTop = elm.scrollHeight
}

view.addUser = (user) => {
  const userElement = document.createElement('div')
  // userElement = <div></div>
  userElement.classList.add('user')
  // userElement = <div class="user"></div>
  userElement.innerText = user
  // userElement = <div class="user">khiemnb2705@gmail.com</div>
  document.querySelector('.list-users').appendChild(userElement)
}

view.showNotification = (id) => {
  const conversationElement = document.getElementById(id)
  // conversationElement.lastElementChild.style = 'display: block'
  conversationElement.querySelector('.notification').style = 'display: block'
}
view.hideNotification = (id) => {
  const conversationElement = document.getElementById(id)
  conversationElement.querySelector('.notification').style = 'display: none'
}