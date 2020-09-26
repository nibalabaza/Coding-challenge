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
            <section class="control-section">
                <div className="control-warper">
                <ul>
               <li>Home  |</li>
               <li>Terms and conditions  |</li>
               <li>Privicy Policy  |</li>
               <li>Collection Statement  |</li>
               <li>Help  |</li>
               <li>Manege Account  |</li>
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
                    <img className="store-child" src="/assets/store/play-store.svg" alt=""/>
                
                </div>
                
            </section>
          </div>
        );
    }
}

export default Home;