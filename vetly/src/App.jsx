import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import account from './img/account.jpg';
import startimg from './img/start_img.png';
import doc from './img/doc.png';
import doctor from './img/doctor.jpg';
import startimg2 from './img/phone1.png';
import appstore from './img/app-store.png';
import cal from './img/cal.jpg';
import convo from './img/convo.jpg';
import map from './img/map.jpg';
import vetlylogo from './img/VETLYLOGO.png';
import logo from './img/vetly_logo.png';
import footerlogo from './img/vetly_logo_white.png';
import computerimg from './img/btn_computer.png';
import star from './img/star.png';
import Form from './form.jsx';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home.js';



{/*asdadasda*/}
class App extends Component {

  render() {
    
 
    configureAnchors({offset: -70, scrollDuration: 400});
    return (
      <div>
      <Router>
        <div>

            <nav>
            <a href='#start'><Link to='/'><img src={logo} className="vetly_logo" alt= "vetly.se" /></Link></a>
                <input id="nav" type="checkbox" />
                <label htmlFor="nav">
                    <span />
                    <span />
                    <span />
                </label>
                
                <ul className="menu">
                    <li><a href='/#services'>Funktion</a></li>
                    <li><a href='/#vets'>Veterinärer</a></li>
                    <li><Link to="/Form">Skapa konto</Link></li>
                    <li><Link to="/Form">Logga in</Link></li>
                </ul>
            </nav>
            <Route exact={true} path="/" component={Home} />
            <Route path="/Form" component={Form} />
            
          </div>
            </Router>


            {/*All code except the fixed nav goes here!*/}
            

            </div>











     );
  }
}

export default App;
