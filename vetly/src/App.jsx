import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import account from './account.jpg';
import startimg from './start_img.png';
import doc from './doc.png';
import doctor from './doctor.jpg';
import startimg2 from './phone1.png';
import appstore from './app-store.png';
import cal from './cal.jpg';
import convo from './convo.jpg';
import map from './map.jpg';
import vetlylogo from './VETLYLOGO.png';
import logo from './vetly_logo.png';
import footerlogo from './vetly_logo_white.png';
import computerimg from './btn_computer.png';
import star from './star.png';
import Form from './Form.jsx';
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
                    <a href='#services'><li>Våra tjänster</li></a>
                    <a href='#vets'><li>Våra veterinärer</li></a>
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
