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
            <section>
                <div className="control-warper">
               <p>Home  |</p>
               <p>Terms and conditions  |</p>
               <p>Privicy Policy  |</p>
               <p>Collection Statement  |</p>
               <p>Help  |</p>
               <p>Manege Account  |</p>
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