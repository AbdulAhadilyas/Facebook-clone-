import './App.css';
import Nav from './component/nav'
import Side from './component/left'
import Story from './component/story'
import Right from './component/right'
import Creatpost from './component/createpost'
import Post from './component/post'




function App() {
  return (

    <>
      <Nav />
      <div className="flexbox">
        <div className="box">
          <Side />
        </div>
        <div className='center-wall'>
              <Story />
              <Creatpost/>
              <Post />
              <Post />
              <Post />
              <Post />
              
        </div>

        <div className="box1">
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
