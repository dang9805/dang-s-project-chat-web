const model = {}
model.currentUser = {}
model.conversations = {}
model.currentConversation= {}
model.register = async (dataRegister) => {
  try {
      await firebase.auth().createUserWithEmailAndPassword(dataRegister.email, dataRegister.password) //dòng nay can thời gian phản hồi từ server -> chạy thằng dưới luôn
      firebase.auth().currentUser.updateProfile({
          displayName: dataRegister.username,
      });
      firebase.auth().currentUser.sendEmailVerification();
      alert("Email của bạn đã được đăng ký. Vui lòng xác nhận email");
      view.setActiveScreen('loginPage');
  } catch (err) { // no se ban error qua cai catch nay
      console.log(err);
      alert(err.message);
  }
}

model.login = async (dataLogin) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
    console.log(response)
    if (response.user.emailVerified) {
      view.setActiveScreen('chatPage')
    } else {
      alert('Please verify email')
    }
  } catch (err) {
    console.log(err);
    if (err.code == 'auth/user-not-found' || err.code == 'auth/invalid-email') {
        document.getElementById('email-error').innerText = `*${err.message}`
    } else if (err.code == 'auth/wrong-password') {
        document.getElementById('password-error').innerText = `*${err.message}`
    }
  } 
}
model.addMessage = (message) => {
  const docId = model.currentConversation.id
  const dataToUpdate = {
    messages: firebase.firestore.FieldValue.arrayUnion(message)
  }
  firebase.firestore().collection('conversations').doc(docId).update(dataToUpdate)
}
  model.getConversations = async () => {
    const response = await firebase.firestore().collection('conversations').where('users', 'array-contains', model.currentUser.email).get()
    model.conversations = getDataFromDocs(response.docs)
    if (model.conversations.length > 0) {
      model.currentConversation = model.conversations[0]
      view.showCurrentConversation()
      view.showListConversation()
    }
  }

model.listenConversationChange = () => {
  let isFirstRun = true
  firebase.firestore().collection('conversations').where('users', 'array-contains', model.currentUser.email).onSnapshot((snapshot) => {
    if(isFirstRun) {
      isFirstRun = false
      return
    }
    const docChanges = snapshot.docChanges()
    for(const oneChange of docChanges) {
      if(oneChange.type === 'modified') {
        const dataChange = getDataFromDoc(oneChange.doc)
        for(let i = 0; i < model.conversations.length; i++) {
          if (model.conversations[i].id === dataChange.id) {
            model.conversations[i] = dataChange
          }
        }
        if(dataChange.id === model.currentConversation.id) {
          model.currentConversation= dataChange 
          view.addMessage(model.currentConversation.messages[model.currentConversation.messages.length - 1 ])
          
      //     if(model.currentConversation.users.length !== dataChange.users.length) {
      //       view.addUser(dataChange.users[dataChange.users.length - 1])
      //     } else {
      //       const lastMsg = dataChange.messages[dataChange.messages.length - 1]
      //       if(lastMsg.owner !== model.currentUser.email) {
      //         view.showNotification(dataChange.id)
      //       }
            // view.addMessage(dataChange.messages[dataChange.messages.length - 1])
            view.scrollToEndElm()
      //     }
      //     model.currentConversation = dataChange
      //   } else {
      //     view.showNotification(dataChange.id)
      //   }
      // } else if(oneChange.type === 'added') {
      //   const dataChange = getDataFromDoc(oneChange.doc)
      //   model.conversations.push(dataChange)
      //   view.addConversation(dataChange)
      // }
      // const change = getDataFromDoc(oneChange.doc)
      // view.showNotification(change.id)
    }}}
  })
}


