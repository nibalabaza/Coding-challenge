import React from 'react';
import '../css/footer.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
        }

    }

     render() {
        return (
          <div className= "container">
            <section className="control-section">
                <div className="control-warper">
                <ul>
               <li>Home<span className="item-footer">|</span></li>
               <li>Terms and conditions<span className="item-footer">|</span></li>
               <li>Privicy Policy<span className="item-footer">|</span></li>
               <li>Collection Statement<span className="item-footer">|</span></li>
               <li>Help<span className="item-footer">|</span></li>
               <li>Manege Account<span className="item-footer">|</span></li>
                </ul>
               </div>
               <div  className="control-text">
               <p>Copyright @ 2016 Demo Streaming. All rights reserved</p>
               </div>
            </section>  
           
            <section className= "social-store">
                <div className="social-img">
                    <img className="social-child" src="/assets/social/facebook-white.svg" alt=""/>
                    <img className="social-child" src="/assets/social/instagram-white.svg" alt=""/>
                    <img className="social-child" src="/assets/social/twitter-white.svg" alt=""/>
                </div>
                <div className="store-img">
                    <img className="store-child" src="/assets/store/app-store.svg" alt=""/>
                    <img className="store-child" src="/assets/store/play-store.svg" alt=""/>
                    <img className="store-child" src="/assets/store/windows-store.svg" alt="" height= "45"/>
                
                </div>
                
            </section>
          </div>
        );
    }
}

export default Home;