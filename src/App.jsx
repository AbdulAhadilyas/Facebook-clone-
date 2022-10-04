import './App.css';
import Nav from './component/nav'
import Side from './component/left'
import Story from './component/story'
import Right from './component/right'
import Post from './component/post'




function App() {
  return (

    <>
      <Nav />
      <div className="flexbox">
        <div className="box">
          <Side />
        </div>
        <div className="box">
        <div className="story-box">
    <Story />
    </div>
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
