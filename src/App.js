import React,{useEffect,useState ,Component} from 'react';
import Login from './Login.js';
import Sign from './sign.js';
import Navi from './components/navbar/navi.js';
import Body from './body.js';
import Aboutus from './aboutus.js';
import Contact from './Contact.js';
import Policy from './Policy.js';
import Restaurant from './Restaurant.js';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import FooterPage from './FooterPage.js';
import View from './view.js';
class App extends Component
  {
  render()
  {
  return (
    <div className="App">
      <div style={{height:'100%'}}>
      <Router>
      <Navi/>
      <Route exact path='/' render={()=><Body/>}/>
      <Route exact path='/log' render={()=><Login/>}/>
      <Route exact path='/sign' render={()=><Sign/>}/>
      <Route exact path='/about' render={()=><Aboutus/>}/>
      <Route exact path='/contact' render={()=><Contact/>}/>
      <Route exact path='/policy' render={()=><Policy/>}/>
      <Route exact path='/add' render={()=><Restaurant/>}/>
      <Route exact path='/view' render={()=><View/>}/>
      
      <FooterPage/>
      </Router>
      </div>
    </div>
  );
}
  }

export default App;

