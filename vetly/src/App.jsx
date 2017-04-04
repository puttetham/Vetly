import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
        <div className="nav">
            <a href="#container">start</a>
            <a href="#">Registrering</a>
            <a href="#">Info</a>
            <a href="#">Vets</a>
            <a href="#faq">F.a.Q</a>
            </div>
        <div className="container">
            
            <div className="start">
            <h1>info info info</h1>
            <h1>info info info</h1>
            <h1>info info info</h1>
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
                <h1>How it works </h1>
            </div>
            <div className="vets">
                <h1>Vet doctors</h1>
            </div>
            <div className="faq">
            <h1><a href="#faq">test</a></h1>


            </div>
            <div className="footer">
                <h1>copyright Etc etc</h1>
            </div>
        </div>
        </div>
      
     );
  }
}

export default App;
