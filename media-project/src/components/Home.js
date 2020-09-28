import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/home.css';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        
        }

    }

     render() {
        return (
           
            <section>
                <Header></Header>
            <div className="home-container">
                 <figure className= "image-box">
                        <div className="nest">
                            <img className="image-box1" src="/assets/placeholder.png" onClick={()=>this.props.history.push('/movies')}/>
                            <span className= "print">Movies</span>
                        </div>
                        <figcaption className="home-title">Populare Movies</figcaption>
                </figure>

                <figure className= "image-box">
                <div className="nest">
                        <img className="image-box2" src="/assets/placeholder.png" onClick={()=>this.props.history.push('/series')}/>
                        <span className= "print">Series</span>
                    </div>
                    <figcaption className="home-title">Popular series</figcaption>
                </figure>
           
            </div>
                <Footer></Footer>
          </section>
        );
    }
}

export default Home;





