import './App.css';
import Nav from './component/nav'
import Side from './component/left'
import Story from './component/story'
import Right from './component/right'



function App() {
  return (
    
    <>
   <Nav/>
   <div className="flexbox">
    <div className="box">
   <Side/>
   </div>
   <div className="box1">
   <Story/>
   </div>
   <div className="box1">
   <Right/>
   </div>
   </div>
   </>
  );
}

export default App;
