const init = () => {

  // khởi tạo firebase
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

  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
      if (user &&user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email
        }
        console.log(model.currentUser)
        view.setActiveScreen('chatPage')
      } else {
        view.setActiveScreen('loginPage')
      } 
  })

}

window.onload = init

// tham khảo firebase C/R/U/D
// firestoreQueries = async () => {
//   // get many document
//   const response = await firebase.firestore().collection('users').get()
//   console.log(response.docs[0].data())
//   const users = getDataFromDocs(response.docs)
//   console.log(users);

// }

getDataFromDoc = (res) => {
  const data =res.data()
  data.id = res.id
  return data
}

getDataFromDocs = (docs) => {
  // const arr = []
  // console.log(docs) // chưa return gì nhé (hàm ko có trả về gì nên => khi em gọi hàm web sẽ ko hiểu)
  return docs.map(item => getDataFromDoc(item)); // về tìm hiểu thêm hàm map() trong js;
}