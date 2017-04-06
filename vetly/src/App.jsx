import React, { Component } from 'react';
import './App.css';
import logo from './start_img.jpg';
import archer from './archer.jpg';
import malory from './malory.jpg';
import lana from './lana.jpg';
import krieger from './krieger.jpg';

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
            {/*All code except the fixed nav goes here!*/}
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

                                        
                
                    <hr/>
                {/*Login / Registration !*/}
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
                <hr/>
                {/*General info regarding the process*/}
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
                <hr/>
                {/*A page about the Vets*/}
                <div className="vets">
                    <center>
                    <h1>Veterinärer</h1>  
                    </center> 
                    <div className="mal">
                        <img src={malory} className="malory" alt= "malory" />
                        <h2>Malory</h2>
                    </div>
                    <div className="arch">
                        <img src={archer} className="archer" alt= "archer" />
                        <h2>Archer</h2>
                    </div>
                    <div className="lan">
                        <img src={lana} className="lana" alt= "lana" />
                        <h2>Lana</h2>
                    </div>
                    <div className="krieg">
                        <img src={krieger} className="krieger" alt= "krieger" />
                        <h2>Krieger</h2>
                    </div>
                </div>


                
                
                <div className="faq">
                <h1>F.a.Q</h1>
                    </div>
            </div>{/*Container ends*/}
            
               {/*Footer*/}
                <div className="footer">
                    <h1>Footer</h1>
                </div>
            </div>



      
     );
  }
}

export default App;
