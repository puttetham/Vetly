import React, { Component } from 'react';
import './App.css';
import logo from './start_img.jpg';

class App extends Component {
  render() {
    return (
        <div>
        <div className="nav">
            <a href="#faq">F.a.Q</a>
            <a href="#vets">Registrering</a>
            <a href="#info">Info</a>
            <a href="#sign">Vets</a>
            <a href="#start">Start</a>
        </div>
        <div className="container">
            
            <div className="start">
                <div className="start-text">
                    <h1 className="heading-start">Träffa veterinär online</h1>
                        <ul className="start-list">
                            <li>✓   Träffa veterinär via videomöte</li>
                            <li>✓   Få råd, recept eller remiss</li>
                            <li>✓   Legitimerade veterinärer & specialister</li>
                            <li>✓   Hemleverans av läkemedel</li>
                            <li>✓   Snabb diagnos eller remiss</li>
                        </ul>
                </div>
                
                <img src={logo} className="img-start" alt= "logo" />
                
            
            </div>

            <div className="sign">
                <div className="signup">
                <h1>Sign Up</h1>
                    <form>
                    <input type="name" placeholder="name"/>
                    <input type="name" placeholder="name"/>
                    <input type="name" placeholder="name"/>
                    <input type="name" placeholder="name"/>
                    </form>
                </div>
                <div className="signin">
                    <h1>Sign in </h1>
                    <form>
                    <input type="name" placeholder="name"/>
                    <input type="name" placeholder="name"/>
                    <input type="name" placeholder="name"/>
                    <input type="name" placeholder="name"/>
                    </form>
                </div>
            </div>

            <div className="info">
                <center><h1>Att boka möte är lika lätt som 1 2 3</h1></center>
                <div className="stage1">
                    <h1>Steg 1 </h1>
                </div>
                <div className="arrow1">
                    <span className="glyphicon">&#xe080;</span>
                </div>
                <div className="stage2">
                    <h1>Steg 2</h1>
                </div>
                <div className="arrow2">
                    <span className="glyphicon">&#xe080;</span>
                </div>
                <div className="stage3">
                    <h1>Steg 3</h1>
                </div>


                
                
            </div>

            <div className="vets">
                <style>
                </style>
                <center>
                <h1>Vet doctors</h1>  
                </center>             
            </div>
            <div className="faq">
            <h1><a href="#faq">test</a></h1>


            </div>
            <div className="footer">
                <h1>Footer</h1>
            </div>
        </div>
        </div>
      
     );
  }
}

export default App;
