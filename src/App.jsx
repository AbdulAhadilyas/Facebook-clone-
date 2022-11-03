import './App.css';
import Nav from './component/nav'
import Side from './component/left'
import Story from './component/story'
import Right from './component/right'
import Creatpost from './component/createpost'
import Post from './component/post'
import { initializeApp } from "firebase/app"
import { getFirestore ,
   collection, 
   addDoc,serverTimestamp,
   query, 
   unsubscribe,
    onSnapshot,
    orderBy,
    deleteDoc,
    doc} from "firebase/firestore";
import { useState ,useEffect} from 'react';
import axios from 'axios';

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
  const [uplodImg, setUplodImg] = useState(null)
  const [safeImage, setSafeImage]= useState({})


  const handleShow = () => {
      setShow(true);
  }
  const  handleHide = () =>{
    setShow(false);
  }  

  const arrs = []
  const submitForm = (event) =>{
    event.preventDefault()
    console.log(inputTxt)
    setShow(false);

    // console.log(uplodImg)

    const formData = new FormData();
    formData.append("file", uplodImg);
    formData.append("upload_preset", "My data base cloud");
    console.log(formData)
  
  
    axios.post('https://api.cloudinary.com/v1_1/ddpky6mca/image/upload',formData)
    .then(function (response) {
    console.log(response.data.url)
    setSafeImage(()=> response.data)

   

    createPost(response.data.url)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })
 
    
    
  }
  console.log("image", safeImage)
  const createPost = async (postUrl) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        postTxt: inputTxt,
        postUrl: postUrl,
        date:serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // console.log("post",post)
  }



    
    

useEffect(() => {
  let unsubscribe = null;
  const getRealtimeData = async () => {
    const q = query(collection(db, "posts") ,orderBy('date' ,'asc')) ;
    unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.unshift({ id: doc.id, ...doc.data()});
      });
      // console.log("posts: ", posts);
      setPost(posts)
    });
  }
  getRealtimeData();
}, [])


const deletePost = async (postId) => {
  console.log("postId: ", postId);
  await deleteDoc(doc(db, "posts", postId));
  console.log("click")
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
        <div className="postItem">'
          
          <Story />
          <Creatpost 
            getInput={(e)=> setInputTxt(e.target.value)}
            submitForm={submitForm} 
            show={show} 
            handleShow={handleShow}
            hide={handleHide}
            setImage={(e)=> setUplodImg(e.target.files[0])}
          />
          {post.map((postData ,i)=>(
            <div key={i}>
             <Post
             postTxt={postData?.postTxt} 
             date={postData?.date?.seconds  } 
             deleteThis={()=> deletePost(postData.id)} 
             postImg={postData?.postUrl}
             />
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
