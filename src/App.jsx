import './App.css';
import Nav from './component/nav'
import Side from './component/left'
import Story from './component/story'
import Right from './component/right'
import Creatpost from './component/createpost'
import Post from './component/post'
import { initializeApp } from "firebase/app";
import { getFirestore ,
   collection, 
   addDoc,serverTimestamp,
   query, 
   unsubscribe,
    onSnapshot} from "firebase/firestore";
import { useState ,useEffect} from 'react';

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
  const [inputTxt , setInputTxt] = useState("")
  const [post , setPost] = useState([])

  const [show, setShow] = useState(false)

  const handleShow = () => {
      setShow(true);
  }
  const  handleHide = () =>{
    setShow(false);
  }  


  const submitForm = (e) =>{
    e.preventDefault()
    console.log(inputTxt)
    setShow(false);
    createPost()
  }

  const createPost = async () => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        postTxt: inputTxt,
        postUrl: "",
        date:serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log("post",post)
  }



    
    

useEffect(() => {

  let unsubscribe = null;
  const getRealtimeData = async () => {
    const q = query(collection(db, "posts"));
    unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.unshift({ id: doc.id, ...doc.data()});
      });
      console.log("posts: ", posts);
      setPost(posts)
    });
  }
  getRealtimeData();
}, [])

  return (

    <>
      <div className="nav">
        <Nav />
      </div>

      <div className="side">
        <Side />
      </div>
      <div className="center">
        <div className="postItem">'
          
          <Story />
          <Creatpost 
            getInput={(e)=> setInputTxt(e.target.value)}
            submitForm={submitForm} 
            show={show} 
            handleShow={handleShow}
            hide={handleHide}
          />

          {post.map((postData ,i)=>(
            <div key={i}>
             <Post postTxt={postData?.postTxt} date={postData?.date?.seconds } />
             </div>
          ))
         
}

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
