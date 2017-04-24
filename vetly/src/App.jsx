import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import account from './account.jpg';
import startimg from './start_img.png';
import doc from './doc.png';
import doctor from './doctor.jpg';
import startimg2 from './phone1.png';
import appstore from './app-store.png';
import archer from './archer.jpg';
import cal from './cal.jpg';
import convo from './convo.jpg';
import krieger from './krieger.jpg';
import lana from './lana.jpg';
import malory from './malory.jpg';
import map from './map.jpg';
import vetlylogo from './VETLYLOGO.png';
import logo from './vetly_logo.png';
import footerlogo from './vetly_logo_white.png';
import computerimg from './btn_computer.png';
import star from './star.png';
import Form from './Form.jsx';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home.js'




class App extends Component {

  render() {
    configureAnchors({offset: -70, scrollDuration: 400});
    return (

      <Router>
        <div>
        
            <nav>
            <Link to="/"><img src={logo} className="vetly_logo" alt= "vetly.se" /></Link>
                <input id="nav" type="checkbox" />
                <label htmlFor="nav">
                    <span />
                    <span />
                    <span />
                </label>
                
                <ul className="menu">
                    <li><Link to="/">Våra tjänster</Link></li>
                    <a href='#vets'><li>Våra veterinärer</li></a>
                    <li>Skapa konto</li>
                    <li><Link to="/form">Logga in</Link></li>
                </ul>
            </nav>
            <Route exact={true} path="/" component={Home} />
            <Route path="/Form" component={Form} />
          </div>
            </Router>









     );
  }
}

export default App;
