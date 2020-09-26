import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/home.css';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          movies: []
        }

    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=1881edab174e49d70809ac509b38c4a5');
        const data = await response.json();
        this.setState({ teams: data })
        console.log(data)
    }



     render() {
        return (
            
            <section>
                <Header></Header>
            <div className="home-container">
            <ul>
                {this.state.movies.map(movie=>
                <li>{movie.name} </li>)}
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