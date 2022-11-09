import Side from '../left'
import Story from '../story'
import Right from '../right'
import Creatpost from '../createpost'
import Post from '../post'
import { initializeApp } from "firebase/app"
import "../../App.css"
import {
    getFirestore,
    collection,
    addDoc, serverTimestamp,
    query,
    unsubscribe,
    onSnapshot,
    orderBy,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore";
import { useState, useEffect } from 'react';
import axios from 'axios';

const firebaseConfig = {
    apiKey: "AIzaSyBXUPy0up4pR4u3wm1oBbdMXmNVh4sYt2Q",
    authDomain: "fakeb00k.firebaseapp.com",
    projectId: "fakeb00k",
    storageBucket: "fakeb00k.appspot.com",
    messagingSenderId: "522092146348",
    appId: "1:522092146348:web:8eac12cfa43506ee4db909"

};


function Home() {
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
    const [inputTxt, setInputTxt] = useState("")
    const [post, setPost] = useState([])
    const [show, setShow] = useState(false)
    const [uplodImg, setUplodImg] = useState(null)
    const [safeImage, setSafeImage] = useState(null)
    const [editInputTxt, setEditInputTxt] = useState("")
    const [updateTxtModal, setUpdateTxtModal] = useState(false)
     const [isEditing, setIsEditing] = useState("")


    const handleShow = () => {
        setShow(true);
    }
    const modalShow = () => {
        setUpdateTxtModal(true);
    }
    const handleHide = () => {
        setShow(false);
    }
    const modalHide = () => {
        setUpdateTxtModal(false);
    }

    const arrs = []
    const submitForm = async (event) => {
        event.preventDefault()
        console.log(inputTxt)
        setShow(false);
        const formData = new FormData();
        formData.append("file", uplodImg);
        formData.append("upload_preset", "My data base cloud");
        console.log(formData)
        if (uplodImg === null) {
            console.log("no file selected")
            try {
                const docRef = await addDoc(collection(db, "posts"), {
                    postTxt: inputTxt,
                    date: serverTimestamp()
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        } else {
            console.log(uplodImg)
            axios.post('https://api.cloudinary.com/v1_1/ddpky6mca/image/upload', formData)
                .then(function (response) {
                    console.log(response?.data?.url)
                    setSafeImage(response?.data)
                    createPost(response?.data?.url)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                })

            console.log("image", safeImage)


        }
        setInputTxt("")
        setUplodImg(null)
    }

    const createPost = async (postUrl) => {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                postTxt: inputTxt,
                postUrl: postUrl,
                date: serverTimestamp()
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
            const q = query(collection(db, "posts"), orderBy('date', 'asc'));
            unsubscribe = onSnapshot(q, (querySnapshot) => {
                const posts = [];
                querySnapshot.forEach((doc) => {
                    posts.unshift({ id: doc.id, ...doc.data() });
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

    const updatePost = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, "posts", isEditing), {
            postTxt:editInputTxt
        })
       modalHide()
       
    }
    return (

        <>
            <div className="side">
                <Side />
            </div>
            <div className="center">
                <div className="postItem">'
                    <Story />
                    <Creatpost
                        getInput={(e) => setInputTxt(e.target.value)}
                        submitForm={submitForm}
                        show={show}
                        handleShow={handleShow}
                        hide={handleHide}
                        setImage={(e) => setUplodImg(e.target.files[0])}
                        ModalTitleCreate={"Create Post"}
                        ModalTitleBtnPost={"Post"}
                    />
                    {post.map((postData, i) => (
                        <div key={i}>
                            <Post
                                postTxt={postData?.postTxt}
                                date={postData?.date?.seconds}
                                deleteThis={() => deletePost(postData.id)}
                                postImg={postData?.postUrl}
                                editThis={()=>{
                                    setIsEditing(postData?.id)
                                    modalShow()
                                }}
                                getUpdatedTxt={(e) => { setEditInputTxt(e.target.value) }}
                                submitUpdate={updatePost}
                                showModal={updateTxtModal}
                                hideModal={modalHide}
                                ModalTitleCreate={"Edit Post"}
                                ModalBtnSave={"Save"}
                               
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
    );
}

export default Home;
