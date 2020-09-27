import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Movie from './Movie'
import '../css/home.css';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         loading:false
        }

    }

    toggleMovies = () => {
        this.setStates({
            loading: !this.state.loading
        })
    }

    toggleLoading = () => {
        console.log("Loading...")
    }


     render() {
        // let display= (this.state.loading) ? <Movie toggle={this.toggleMovies} /> : <Home toggle={this.toggleLoading} />

        return (
           
            <section>
                <Header></Header>
            <div className="home-container">
                
            <ul>
                <div className= "image-box">
                <img className="image-box1" src="/assets/placeholder.png" onClick={()=>this.props.history.push('/movies')}></img>
                <img className="image-box2" src="/assets/placeholder.png" onClick={()=>this.props.history.push('/series')}></img>
                </div>
                </ul>
                
            </div>
                <Footer></Footer>
          </section>
        );
    }
}

export default Home;

// render () {
//     const imageClick = () => {
//       console.log('Click');
//     } 
//     return (
//        <div>
//           <img src={require('/myfolder/myimage.png') onClick={() => imageClick()} />
//        </div>
//     );
//  }
// }

// {this.state.hasAccount ? <AccountAdded /> : <AddAccount updateAccount={this.updateAccountStatus} />}


