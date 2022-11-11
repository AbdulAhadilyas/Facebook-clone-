import { useState,useEffect } from 'react';
import From from './component/Form';
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged,signOut} from "firebase/auth";
import Rout from "./component/Routers/Router" 
import Nav from "./component/nav" 

const firebaseConfig = {
  apiKey: "AIzaSyDPqtZOv212keJhpLWnuTTWVScLtiaFW3w",
  authDomain: "fakeb00k-01.firebaseapp.com",
  projectId: "fakeb00k-01",
  storageBucket: "fakeb00k-01.appspot.com",
  messagingSenderId: "810198591603",
  appId: "1:810198591603:web:a049dea4189b1a63c86206"
};


function App() {
//   const app = initializeApp(firebaseConfig);

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [singEmail, setSingEmail] = useState("")
//   const [singPassword, setSingPassword] = useState("")
//   const [isLogin, setIsLogin] = useState(false)


//   const createAccount = (e) => {
//     e.preventDefault()
//     const auth = getAuth(app);
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//         // console.log("account created", user)
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage)
//         // ..
//       });
//     console.log(email, password)
//   }


//   const Login = (e) => {
//     e.preventDefault()
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, singEmail, singPassword)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log("login")
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log( error.message)
//       });
//     console.log(singEmail,singPassword)
//    }

//   useEffect(() => {
//     const auth = getAuth();
//     const unSubscribe =onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         setIsLogin(true)
//         console.log("user is login", user)
//       } else {
//         setIsLogin(false)
//       }
//     });
//     return ()=>{
//       unSubscribe()
//       console.log("clean up")
//     }
//   }, [])


// const logOut = () =>{
//   const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
//   console.log("logout")
// }).catch((error) => {
//   // An error happened.
//   console.log("failed")
// });
// }

  return (
    <div>
      <div className="nav">
        <Nav />
      </div>
      <Rout/>

      {/* <From getUserEmail={(e) => setEmail(e.target.value)}
        getUserPass={(e) => setPassword(e.target.value)}
        singInEmail={(e) =>setSingEmail(e.target.value)}
        singInPass={(e) =>setSingPassword(e.target.value)}
        singInWithEmail={Login}
        createAccount={createAccount}

        />
     <button onClick={logOut}>logOut</button> */}
    </div>



  );
}

export default App;
