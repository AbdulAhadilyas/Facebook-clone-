import Nav from './component/nav'
import Home from './component/pages/Home';
import Router from './component/Routers/Router';



function App() {

  return (
    <div>
      <div className="nav">
        <Nav />
      </div>
      <Router/>
    </div>


    // <div className="right-fixd">
    //   <Right />
    // </div>
  );
}

export default App;
