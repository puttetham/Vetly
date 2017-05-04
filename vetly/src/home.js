import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import TextCarousel from 'react-text-carousel';
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

class Home extends Component {

  render() {
    configureAnchors({offset: -70, scrollDuration: 400});
    const phrases = ["hältutredningar", "ledbehandlingar", "tandundersökningar", "besiktningar", "röntgen", "endoskopi", "och mer därtill.."]; // Required
    const interval = 2600; // The time to wait before rendering the next string
    const typistProps = {} // Props that are passed to the react-typist component
    return (



            <div>
            {/*All code except the fixed nav goes here!*/}
            <ScrollableAnchor id={'start'}>
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
                            <img src={computerimg} className="img-computer" alt= "kör vetly från datorn" />


                    </div>
                    </div>

                        <div className="col-md-6">
                        <img src={startimg} className="img-veterinary" alt="veterinär" />



                        </div>


                        {/*<img src={startimg} className="img-veterinary" alt= "veterinär" />
                        <img src={startimg2} className="img-horse" alt= "häst" />*/}



                </div>{/*start*/}
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
                    <div className="col-md-12 customers">
                      <h2>98% Nöjda kunder!</h2>
                      {/* <br></br>
                      Kvalitativ djurvård behöver inte vara kostsam eller tidskrävande. Med Vetly kan du snabbt och enkelt träffa en veterinär
                      via din mobil eller dator, oavsett vart du befinner dig.
                      <br></br> */}
                      <br></br>
                      <img src={star} className="star" alt= "star" />
                      <img src={star} className="star" alt= "star" />
                      <img src={star} className="star" alt= "star" />
                      <img src={star} className="star" alt= "star" />
                      <img src={star} className="star" alt= "star" />
                      <hr></hr>
                   </div>
                     <div className="col-md-4 quotes">
                       <p><i className="fa fa-quote-right 4x" aria-hidden="true"></i> Kanonbra. Hjälpsamma och trevliga. Jag är supernöjd.</p>
                     </div>
                     <div className="col-md-4 quotes">
                       <p><i className="fa fa-quote-right 4x" aria-hidden="true"></i> Mitt absolut bästa veterinärbesök någonsin. Och så skönt att slippa åka iväg.</p>
                    </div>
                    <div className="col-md-4 fix">
                       <p><i className="fa fa-quote-right 4x" aria-hidden="true"></i> Riktigt bra! Bokar in ett nytt möte så fort som möjligt.</p>



                    </div>
                </div>
              </div>




                </ScrollableAnchor>
                <ScrollableAnchor id={'services'}>
                <div className="services">

                    <div className="row">

                    <center><h2>Vetly fungerar på följande sätt</h2></center>
                        <div className="col-md-4">
                            <h2>Registrering</h2>
                            <i className="fa fa-user fa-4x" aria-hidden="true"></i>
                            <p>För att kunna boka ditt första veterinärmöte måste du först skapa ett konto. Endast ett fåtal personuppgifter
                                - så som namn och emailaddress.</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Bokning</h2>
                            <i className="fa fa-calendar fa-4x" aria-hidden="true"></i>
                            <p>
                            Börja med att fylla i information om den häst som ärendet gäller och beskriv sedan ditt ärende. Försök att ge en så
                             detaljerad och utförlig beskrivning som möjligt.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Videosamtal</h2>
                            <i className="fa fa-video-camera fa-4x" aria-hidden="true"></i>
                            <p>När det har blivit dags för ditt möte så ringer veterinären upp dig genom appen.
                                 Mötet genomförs via video och du får 10 minuters samtalstid med din veterinär.
                                  </p>

                        </div>


                    </div>
                </div>{/*HOW IT WORKS SECTION*/}
                </ScrollableAnchor>

                <div className="buttondiv">
                  <div className="buttoncontainer">
                    <center>
                      <p className="booktext">Vi kan hjälpa dig med <p className="textcar"><TextCarousel phrases={phrases} interval={interval} typistProps={typistProps} /></p></p>
                      <button className="bookbutton" type="button">REGISTRERA</button>
                    </center>
                  </div>
                </div>



                {/*A page about the Vets*/}
                <ScrollableAnchor id={'vets'}>
                <div className="vets">
                    <div className="row">
                        
                        <center><h2>Våra veterinärer</h2></center>
                        <p className="vettext">Vetly har många legitimerade vetrinärer som har specialkompetens inom hästens sjukdomar och några har specialiserat sig
                          inom egna intresseområden. Vill du vet mer om en veterinärs specialområde kan du klicka på deras bild neden.
                          Alla vetrinärer har tränats för att på bästa möjliga sätt kunna tillgodose dina behov.</p>
                        
                        <div className="col-md-3">
                            <img src={doctor} className="doc" alt= "doc" />
                            <h2>Pierre Massamiri</h2>
                            <p className="vettext2">Leg. Vetrinär</p>
                        </div>
                        <div className="col-md-3">
                            <img src={doctor} className="doc" alt= "doc" />
                            <h2>Joseph Prasant</h2>
                            <p className="vettext2">Leg. Vetrinär</p>
                        </div>
                        <div className="col-md-3">
                            <img src={doctor} className="doc" alt= "doc" />
                            <h2>WARMACHINE</h2>
                            <p className="vettext2">Leg. Vetrinär</p>
                        </div>
                        <div className="col-md-3">
                            <img src={doctor} className="doc" alt= "doc" />
                            <h2>Fgt doktor</h2>
                            <p className="vettext2">Leg. Vetrinär</p>
                        </div>
                    </div>
                </div>{/*VET DOCTORS*/}
                </ScrollableAnchor>
                <div className="buttondiv">
                  <div className="buttoncontainer">
                    <center>
                      <p className="booktext">Kom igång direkt, och boka ditt första veterinärmöte.</p>
                      <button className="bookbutton" type="button">BOKA NU</button>
                    </center>
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
                    <span>Om Vetly</span>

                    Kvalitativ djurvård behöver inte vara kostsam eller tidskrävande. Med Vetly kan du snabbt
                    och enkelt träffa en veterinär via din mobil eller dator, oavsett vart du befinner dig.
                  </p>

                  <div className="footer-icons">

                    <a href="https://www.facebook.com/" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="https://se.linkedin.com/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/" className="github"><i className="fa fa-github"></i></a>



                  </div>
                  </div>
                </div>

                <a href='#start'><i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i></a>

               </footer>
            </div>










     );
  }
}

export default Home;
