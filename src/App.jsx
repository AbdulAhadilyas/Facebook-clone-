import './App.css';
import Nav from './component/nav'
import Side from './component/left'
import Story from './component/story'
import Right from './component/right'
import Creatpost from './component/createpost'
import Post from './component/post'
import ModalWin from './component/Modal'




function App() {
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
