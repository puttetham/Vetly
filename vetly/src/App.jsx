import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import account from './account.jpg';
import startimg from './veterinary.png';
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





class App extends Component {
    
  render() {
    configureAnchors({offset: -60, scrollDuration: 400});
    return (
        <div>
            <nav>
                <h2 className="brand"><span className="v">V</span>ETLY</h2>
                <input id="nav" type="checkbox" />
                <label htmlFor="nav">
                    <span />
                    <span />
                    <span />
                </label>
                <ul className="menu">
                    <a href='#services'><li>Våra tjänster</li></a>
                    <a href='#vets'><li>Våra vetrinärer</li></a>
                    <li>Skapa konto</li>
                    <li>Logga in</li>
                </ul>
            </nav>


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
                        

                    
                </div>{/*start*/}






                {/*Login / Registration !*/}

               {/* <div className="sign">
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
                </div>*/}

                {/*General info regarding the process*/}
                <ScrollableAnchor id={'services'}>
                <div className="services">

                    <div className="row">

                    <center><h3>Vetly fungerar på följande sätt</h3></center>
                        <div className="col-md-4">
                            <h2>Registrering</h2>
                            <img src={account} className="account" alt ="account"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat est leo, nec pharetra erat tristique vitae. Mauris faucibus massa id sapien consequat, sollicitudin tristique felis pulvinar.</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Bokning</h2>
                            <img src={cal} className="cal" alt="cal"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat est leo, nec pharetra erat tristique vitae. Mauris faucibus massa id sapien consequat, sollicitudin tristique felis pulvinar.</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Videosamtal</h2>
                            <img src={convo} className="convo" alt="convo" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat est leo, nec pharetra erat tristique vitae. Mauris faucibus massa id sapien consequat, sollicitudin tristique felis pulvinar.</p>
                        </div>
                    </div>

                </div>{/*HOW IT WORKS SECTION*/}
                </ScrollableAnchor>
                <div className="book">
                    <center><button className="bookbutton" type="button">Boka Nu</button></center>

                </div>
                {/*A page about the Vets*/}
                <ScrollableAnchor id={'vets'}>
                <div className="vets">
                    <div className="row">
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
                </div>{/*VET DOCTORS*/}
                </ScrollableAnchor>
                <div className="info">
                </div>


               {/*Footer*/}

               <footer className="footer-distributed">
               <div className="row">

                <div className="footer-left">

                <img src={vetlylogo} alt= "häst" />

                </div>

                <div className="footer-center">

                  <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>21 Odenplan</span> Stockholm , Sweden</p>
                  </div>

                  <div>
                    <i className="fa fa-phone"></i>
                    <p>+0736456</p>
                  </div>

                  <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@vetly.com">support@vetly.com</a></p>
                  </div>

                </div>

                <div className="footer-right">

                  <p className="footer-company-about">
                    <span>About Vetly</span>
                    Vetly har valt ut legitimerade läkare med gedigen erfarenhet från primärvård som är redo att hjälpa dig med dina besvär eller frågeställningar. Alla läkare har tränats för att på bästa möjliga sätt kunna tillgodose dina behov via videomöte.
                  </p>

                  <div className="footer-icons">

                    <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                    <a href="https://se.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/"><i className="fa fa-github"></i></a>

                  </div>

                </div>
                </div>
               </footer>
            </div>

        
    

        





     );
  }
}

export default App;
