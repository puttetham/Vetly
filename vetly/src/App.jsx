import React, { Component } from 'react';
import './App.css';

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
                <h1>info info info</h1>
                <h1>info info info</h1>
                <h1>info info info</h1>
                
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
                <h1>Vet doctors</h1>  
                </center>  


                <div id="malory">
                <h2>Malory</h2>
                <img src="glengoolie.png" />
                </div>

                <div id="sterling">
                <h2>Sterling</h2>
                <img src="glengoolie.png" />
                </div>  

                <div id="lana">
                <h2>Lana</h2>
                <img src="glengoolie.png" />
                </div>

                <div id="krieger">
                <h2>Krieger</h2>
                <img src="glengoolie.png" />
            </div>


            </div>
            <hr/>
            {/*F.a.Q */}
            <div className="faq">
            <h1><a href="#faq">test</a></h1>


            </div>
           {/*Footer*/}
            <div className="footer">
                <h1>Footer</h1>
            </div>
        </div>
        </div>
      
     );
  }
}

export default App;
