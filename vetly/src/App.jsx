import React, { Component } from 'react';
import './App.css';
import account from './account.png';
import startimg from './veterinary.png';
import startimg2 from './horse.png';
import appstore from './app-store.png';
import archer from './archer.jpg';
import cal from './cal.jpg';
import convo from './convo.jpg';
import krieger from './krieger.jpg';
import lana from './lana.jpg';
import malory from './malory.jpg';


class App extends Component {
  render() {
    return (
        <div>
            <div className="nav">
                <a href="#">Logga in</a>
                <a href="#">Registering</a>
                <a href="#">F.a.Q</a>
                <a href="#">Process</a>
                <a href="#">Veterinärer</a>
                <a href="#">Info</a>
            </div>
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
                            <img src={appstore} className="img-appstore" alt= "ladda ner vetly från appstore" />
                    </div>
                    
                    <img src={startimg} className="img-veterinary" alt= "veterinär" />
                    <img src={startimg2} className="img-horse" alt= "häst" />
                    
                
                </div>

                                        
                
                    
                {/*Login / Registration !*/}
                <hr/>
                <div className="sign">
                    <div className="signup">
                    <h1>Registrera Dig</h1>
                        <form>
                        <input class="left" type="username" placeholder="Användarnamn"/><br></br>
                        <input class="left" type="password" placeholder="Lösenord"/><br></br>
                        <input class="left" type="password" placeholder="Bekräfta Lösenord"/><br></br>
                        <input class="left" type="email" placeholder="E-post"/><br></br>
                        <button class="left" type="button">Registrera</button>
                        </form>
                    </div>
                    <div className="signin">
                    <h1>Logga In </h1>
                        <form>
                        <input class="right" type="username" placeholder="Användarnamn"/><br></br>
                        <input class="right" type="password" placeholder="Lösenord"/><br></br>
                        <button class="right" type="button">Logga In</button>
                        </form>
                    </div>
                </div>
                <hr/>
                {/*General info regarding the process*/}
                <div className="info">
                    <center><h3>Så här går processen till</h3></center>
                    <div className="row">  
                        <div className="col-md-4">
                        <img src={account} className="account" alt ="account"/>
                            <h2>Registrera dig</h2>
                            <p>Ifall du inte redan har ett konto är det bara att registrera sig.</p>

                        </div>
                        <div className="col-md-4">
                        <img src={cal} className="cal" alt="cal"/>
                            <h2>Boka tid</h2>
                            <p>När du har ett konto är det bara att gå in och hitta en tid</p>
                            <p>som passar dig och boka.</p>
                        
                        </div>
                        <div className="col-md-4">
                        <img src={convo} className="convo" alt="convo" />
                            <h2>Videosamtal</h2>
                            <p>När dagen har kommit så kommer du delta i ett videosamtal</p>
                            <p>med en av våra veterinärer. Se till att vara här i tid!</p>

                        
                        </div>
                    </div>
                
                </div>
                <hr/>
                {/*A page about the Vets*/}
                <div className="vets">
                    <center>
                    <h3>Veterinärer</h3> 
                    <h4> Vetly erbjuder dem bästa veterinärerna.</h4> 
                    </center> 
                    <div className="col-md-3">
                        <img src={malory} className="malory" alt= "malory" />
                        <h2>Malory</h2>
                        <p>Running the Cyril Agency</p>
                    </div>
                    <div className="col-md-3">
                        <img src={archer} className="archer" alt= "archer" />
                        <h2>Archer</h2>
                        <p>World best secret agent who is into phrasing</p>
                    </div>
                    <div className="col-md-3">
                        <img src={lana} className="lana" alt= "lana" />
                        <h2>Lana</h2>
                        <p>Secret agent and a mother with huge hands</p>
                    </div>
                    <div className="col-md-3">
                        <img src={krieger} className="krieger" alt= "krieger" />
                        <h2>Krieger</h2>
                        <p>Crazy scientist who fancys pigglies</p>
                    </div>
                </div>
                <hr/>
                <div className="faq">
                    <h1>F.a.Q</h1>
                </div>
                <div className="footer">
                    <h1>Footer</h1>
                </div>
            {/*Container ends*/}

               {/*Footer*/}
                
        </div>



      
     );
  }
}

export default App;
