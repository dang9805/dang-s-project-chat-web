// nơi để set up các điều kiện khác của js như đăng nhập 

const controller = {}
controller.register = (
  {
    email, 
    username,
    password, 
    confirmPassword
  }) => {
  if(email === '') {
    // view.setErrorMessage('email-error','Vui lòng nhập email')
    document.getElementById("email-error").innerHTML = 'Vui lòng nhập email'
  } else {
    // view.setErrorMessage('email-error','')
    document.getElementById("email-error").innerHTML = ''
  }

  if(username === '') {
    // view.setErrorMessage('username-error','Vui lòng nhập tên đăng nhập')
    document.getElementById('username-error').innerHTML= 'Vui lòng nhập tên đăng nhập'
  } else {
    // view.setErrorMessage('username-error','')
    document.getElementById('username-error').innerHTML= ''
  }

  if(password === '') {
    // view.setErrorMessage('password-error','Vui lòng nhập lại mật khẩu')
    document.getElementById('password-error').innerHTML = 'Vui lòng nhập lại mật khẩu'
  } else {
    // view.setErrorMessage('password-error','')
    document.getElementById('password-error').innerHTML = ''
  }

  if(confirmPassword === '') {
    // view.setErrorMessage('confirm-password-error','Vui lòng xác nhận mật khẩu')
    document.getElementById('confirm-password-error').innerHTML = 'Vui lòng xác nhận mật khẩu'
  } else if(password !== confirmPassword) {
    // view.setErrorMessage('confirm-password-error',"Mật khẩu không chính xác")
    document.getElementById('confirm-password-error').innerHTML = 'Mật khẩu không chính xác'
  } else {
    // view.setErrorMessage('confirm-password-error','')
    document.getElementById('confirm-password-error').innerHTML = ''
  }

  if( 
      email !== ''
    && password !==''
    && username !== ''
    && confirmPassword !== ''
    && password === confirmPassword
  ) {
    const dataRegister = {
      email,
      username,
      password
    }
    model.register(dataRegister)
  }
}

controller.login = ({email, password}) => {
  if(email === ''){
    document.getElementById("email-error").innerHTML = 'Vui lòng nhập email'
  } else{
    document.getElementById("email-error").innerHTML = ''
  }

  if(password === '') {
    document.getElementById('password-error').innerHTML = 'Vui lòng nhập lại mật khẩu'
  } else {
    // view.setErrorMessage('password-error','')
    document.getElementById('password-error').innerHTML = ''
  }
}