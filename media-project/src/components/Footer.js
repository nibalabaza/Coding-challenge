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
            <section>
                
            </section>
            <section>
                <div className="social-img">
                    <img src="../../assets/social/facebook-white.svg" alt=""/>
                    <img src="../../assets/instagram-white.svg" alt=""/>
                    <img src="../../assets/twitter-white.svg" alt=""/>
                </div>
                <div className="store-img">
                    <img src="../../assets/store/app-store.svg" alt=""/>
                    <img src="../../assets/store/app-store.svg" alt=""/>
                    <img src="../../assets/store/app-store.svg" alt=""/>
                
                </div>
                <div></div>
            </section>
          </div>
        );
    }
}

export default Home;