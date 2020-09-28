import React from 'react';
import '../css/header.css';

class Home extends React.Component {

    constructor(props) {
        super(props);


    }

     render() {
        return (
          <div className="head-container">
           <section className="nav">
               <div className= "title">
                <h2 className="control-title1">DEMO Streaming</h2>
                </div>
                <div className= "btn">
                    <button className="login-btn">Login</button>
                    <button className="trial-btn">Start your free trial</button>
                </div>
            </section> 


            <section className= "head-section2">
                <h2 className="control-title2">Popular Titles</h2>
            </section> 
              
          </div>
        );
    }
}

export default Home;