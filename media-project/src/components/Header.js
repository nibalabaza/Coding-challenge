import React from 'react';
import '../css/header.css';

class Home extends React.Component {

    constructor(props) {
        super(props);


    }

     render() {
        return (
          <div className="head-container">
           <section className= "head-section1">
                <h2 className="control-title1">DEMO Streaming</h2>
            </section> 
            <section className= "head-section2">
                <h2 className="control-title2">Popular Titles</h2>
            </section> 
              
          </div>
        );
    }
}

export default Home;