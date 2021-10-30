const init = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyC3Im-z6R-P0I0-CIeKLihsv4uj-b_GuLM",
    authDomain: "project-chat-web.firebaseapp.com",
    projectId: "project-chat-web",
    storageBucket: "project-chat-web.appspot.com",
    messagingSenderId: "511136054736",
    appId: "1:511136054736:web:7754cf70b72dd1def38dd5"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.app().name)
    firebase.auth().onAuthStateChanged((res) => {
      console.log(res)
      if (res) {
        if (res.emailVerified) {
          model.currentUser = {
            displayName: res.displayName,
            email: res.email
          }
          console.log(model.currentUser)
          view.setActiveScreen('chatPage')
        } else {
          view.setActiveScreen('loginScreen')
          alert('Vui lòng xác nhận email')
        }
      } else {
        view.setActiveScreen('registerPage')
      }
    })
}

window.onload = init

// const firebaseConfig = {
//   apiKey: "AIzaSyC3Im-z6R-P0I0-CIeKLihsv4uj-b_GuLM",
//   authDomain: "project-chat-web.firebaseapp.com",
//   projectId: "project-chat-web",
//   storageBucket: "project-chat-web.appspot.com",
//   messagingSenderId: "511136054736",
//   appId: "1:511136054736:web:7754cf70b72dd1def38dd5"
// };



//   // // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
  
  
firestoreQueries = async () => {
  //get one document
  const response = await firebase.firestore().collection('users').doc('tDsyFi4yskud1mvxYG7T').get()
  // get many document

  // add new document
  // update document
  // delate document
}

getDataFromDoc = (res) => {
  const data = res.data()
  data.id = res.id
  return data
}

getDataFromDocs = (docs) => {
  return docs.map(getDataFromDoc)
}