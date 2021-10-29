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
  }
}