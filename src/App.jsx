import './App.css';
import Nav from './component/nav'
import Side from './component/left'
import Story from './component/story'
import Right from './component/right'
import Creatpost from './component/createpost'
import Post from './component/post'
import { initializeApp } from "firebase/app";
import { getFirestore , collection, addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXUPy0up4pR4u3wm1oBbdMXmNVh4sYt2Q",
  authDomain: "fakeb00k.firebaseapp.com",
  projectId: "fakeb00k",
  storageBucket: "fakeb00k.appspot.com",
  messagingSenderId: "522092146348",
  appId: "1:522092146348:web:8eac12cfa43506ee4db909"

};


function App() {
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const createPost = async () => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        postTxt: "hello world ",
        postUrl: "Lovelace",
        date: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }



  return (

    <>
      <div className="nav">
        <Nav />
      </div>

      <div className="side">
        <Side />
      </div>
      <div className="center">
        <div className="postItem">
          <Story />
          <Creatpost />
          <Post />
        </div>
      </div>
      <div className="right-fixed">
        <div className="right">
          <Right />
        </div>
      </div>


    </>


    // <div className="right-fixd">
    //   <Right />
    // </div>
  );
}

export default App;
