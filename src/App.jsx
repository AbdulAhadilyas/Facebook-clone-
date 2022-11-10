
import { useState,useEffect } from 'react';
import From from './component/Form';
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged,signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPqtZOv212keJhpLWnuTTWVScLtiaFW3w",
  authDomain: "fakeb00k-01.firebaseapp.com",
  projectId: "fakeb00k-01",
  storageBucket: "fakeb00k-01.appspot.com",
  messagingSenderId: "810198591603",
  appId: "1:810198591603:web:a049dea4189b1a63c86206"
};


function App() {
  const app = initializeApp(firebaseConfig);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [singEmail, setsingEmail] = useState("")
  const [singPassword, setSingPassword] = useState("")
  const [isLogin, setisLogin] = useState(false)


  const createAccount = (e) => {
    e.preventDefault()
    // const auth = getAuth(app);
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    //     // console.log(user)
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
    // console.log(email, password)
  }


  const Login = (e) => {
    e.preventDefault()
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, singEmail, singPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log("login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log( error.message)
      });
   }
  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setisLogin(true)
      } else {
        setisLogin(false)
      }
      console.log(isLogin)
    });
  }, [])

  
  

 
const logOut = () =>{
  const auth = getAuth(app);
signOut(auth).then(() => {
  // Sign-out successful.
  console.log("logout")
}).catch((error) => {
  // An error happened.
  console.log("faild")
});
}




  return (
    <div>
      {/* <div className="nav">
        <Nav />
      </div>
      <Router/> */}

      <From getUserEmail={(e) => setEmail(e.target.value)}
        getUserPass={(e) => setPassword(e.target.value)}
        createAccount={createAccount}
        singInWithEmail={Login}
        singInEmail={(e) => setsingEmail(e.target.value)}
        singInPass={(e) => setSingPassword(e.target.value)}

      />
<button onClick={logOut}>Log Out</button>
    </div>



  );
}

export default App;
