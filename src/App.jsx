
import { useState } from 'react';
import From from './component/Form';
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
 
  const [email,setEmail] =useState()
  const [password,setPassword] =useState()


  const createAccount =  (e) => {
    e.preventDefault()
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email,password )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    console.log(email,password)
   
  }

 



  return (
    <div>
      {/* <div className="nav">
        <Nav />
      </div>
      <Router/> */}

      <From  getUserEmail={(e)=>setEmail(e.target.value)} 
       getUserPass={(e)=>setPassword(e.target.value)}
       createAccount={createAccount}
      
      
      />

    </div>



  );
}

export default App;
