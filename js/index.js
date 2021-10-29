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
    const app = initializeApp(firebaseConfig);

  view.setActiveScreen('registerPage')
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
  
  
