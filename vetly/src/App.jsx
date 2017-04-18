import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import account from './account.jpg';
import startimg from './start_img.png';
import doc from './doc.png';
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





class App extends Component {
    
  render() {
    configureAnchors({offset: -70, scrollDuration: 400});
    return (
        <div>
            <nav>
            <a href='#start'><img src={logo} className="vetly_logo" alt= "vetly.se" /></a>
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
            <ScrollableAnchor id={'start'}>
            <ScrollableAnchor id={'up'}>
            <div className="start">
            <div className="col-md-6">
               
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
                    </div>

                        <div className="col-md-6">
                        <img src={startimg} className="img-veterinary" alt="veterinär" />

                        </div>

                        
                        {/*<img src={startimg} className="img-veterinary" alt= "veterinär" />
                        <img src={startimg2} className="img-horse" alt= "häst" />*/}

                        
                    
                </div>{/*start*/}
                </ScrollableAnchor>
                </ScrollableAnchor>





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
                <ScrollableAnchor>
                <div className="about">
                <div className="row">
                    <div className="col-md-6"> 
                        <h2>Vetly</h2>
                        <h3>Kort beskrivning</h3>
                        <p> Med Vetly kan du träffa en legitimerad veterinär oavsett var du befinner dig. Dessutom är det både snabbt och enkelt! Låt oss berätta hur:</p>
                        <p>
                        Kvalitativ djurvård behöver inte vara kostsam eller tidskrävande. Med Vetly kan du snabbt och enkelt träffa en veterinär via din mobil eller dator, oavsett vart du befinner dig.
                        </p>
                        <h3>Möjliheterna med Vetly</h3>
                        <p>- Träffa en legitimerad veterinär vart du än befinner dig.</p>
                        <p>- Slipp långa väntetider och få hjälp även kvällar och helger.</p>
                        <p>- Boka tid snabbt och enkelt direkt via din mobil eller dator.</p>
                    </div>
                        <h2>Registrera</h2>
                    <div className="col-md-6">
                        <h3>Kom igång</h3>
                        <p>För att kunna boka ditt första veterinärmöte måste du först skapa ett konto. Endast ett fåtal personuppgifter - så som namn och emailaddress - krävs för att kunna registrera en ny användare, och efter bara någon minut kan du börja använda alla tjänstens funktioner.</p>
                    
                        <h3>Skapa ditt ärende</h3>
                        <p>Börja med att fylla i information om den häst som ärendet gäller och beskriv sedan ditt ärende. Försök att ge en så detaljerad och utförlig beskrivning som möjligt för att göra det lättare för veterinären att snabbt kunna göra en korrekt bedömning.</p>
                    </div>
                </div>
                </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'services'}>
                <div className="services">

                    <div className="row">

                    <center><h3>Vetly fungerar på följande sätt</h3></center>
                        <div className="col-md-4">
                            <h2>Registrering</h2>
                            <img src={account} className="account" alt ="account"/>
                            <p>För att kunna boka ditt första veterinärmöte måste du först skapa ett konto. Endast ett fåtal personuppgifter - så som namn och emailaddress - krävs för att kunna registrera en ny användare, och efter bara någon minut kan du börja använda alla tjänstens funktioner</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Bokning</h2>
                            <img src={cal} className="cal" alt="cal"/>
                            <p>Boka en tid som passar dig eller ställ dig i kö för en drop-in- tid och få hjälp direkt.</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Videosamtal</h2>
                            <img src={convo} className="convo" alt="convo" />
                            <p>När det har blivit dags för ditt möte så ringer veterinären upp dig genom appen. Mötet genomförs via video och du får 10 minuters samtalstid med din veterinär. Du kan när som helst gå till din historik och se dina videomöten. Om det visar sig att ditt ärende kräver vidare vård kan du få en remiss till en fysisk klinik nära dig.</p>
                        </div>
                        

                    </div>
                </div>{/*HOW IT WORKS SECTION*/}
                </ScrollableAnchor>
                                        <center><button className="bookbutton" type="button">Boka Nu</button></center>

                    
                
                {/*A page about the Vets*/}
                <ScrollableAnchor id={'vets'}>
                <div className="vets">
                    <div className="row">
                        <center>
                        <h3>Träffa din veterinär</h3>
                        <h4> Vetly erbjuder dem bästa veterinärerna.</h4>
                        </center>
                        <div className="col-md-3">
                            <img src={archer} className="doc" alt= "doc" />
                            <h2>Malory</h2>
                        </div>
                        <div className="col-md-3">
                            <img src={archer} className="doc" alt= "doc" />
                            <h2>Archer</h2>
                        </div>
                        <div className="col-md-3">
                            <img src={archer} className="doc" alt= "doc" />
                            <h2>Lana</h2>
                        </div>
                        <div className="col-md-3">
                            <img src={archer} className="doc" alt= "doc" />
                            <h2>Krieger</h2>
                        </div>
                    </div>
                </div>{/*VET DOCTORS*/}
                </ScrollableAnchor>
                <div className="info">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Vanliga frågor</h2>
                        
                    </div>
                    <div className="col-md-6">
                        <h2>99% nöjda ryttare</h2>
                    </div>
                </div>
                </div>


               {/*Footer*/}
               
               <footer className="footer-distributed">
               <div className="row">


                <div className="footer-left">
                
                {/*<img src={vetlylogo} alt= "häst" />*/}
                <img src={footerlogo} className="vetly_logo_footer" alt= "veterinär på nätet" />
                </div>

                <div className="footer-center">

                  <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>21 Odenplan</span> Stockholm , Sweden</p>
                  </div>

                  <div>
                    <i className="fa fa-phone"></i>
                    <p>073-645689</p>
                  </div>

                  <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@vetly.com">support@vetly.com</a></p>
                  </div>

                </div>

                <div className="footer-right">

                  <p className="footer-company-about">
                    <span>About Vetly</span>
                    Kvalitativ djurvård behöver inte vara kostsam eller tidskrävande. Med Vetly kan du snabbt och enkelt träffa en veterinär via din mobil eller dator, oavsett vart du befinner dig.
                  </p>

                  <div className="footer-icons">

                    <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                    <a href="https://se.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/"><i className="fa fa-github"></i></a>



                  </div>
                  </div>
                </div>

                <a href='#up'><i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i></a>
                
               </footer>
            </div>

        
    

        





     );
  }
}

export default App;
