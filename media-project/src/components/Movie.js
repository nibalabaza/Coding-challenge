import React from 'react';
import '../css/movie.css';

class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies :[],
            loading: true,
            error: false
        }

    }

    componentDidMount = () =>{
        fetch("https://api.themoviedb.org/3/discover/movie/?api_key=1881edab174e49d70809ac509b38c4a5")
        .then(response => {
            return response.json();
        })
        .then((data) => {
              console.log(data);
              this.setState({movies : data.results, loading: false });
        })
        .catch(error => {
            console.log("Error", error)
            this.setState({
                error: true
            })
        })
    }

     render() {
        if (this.state.error) {
            return <div>Error</div>;
          }
        if (this.state.loading) {
            return <div>loading...</div>;
          }
    
        return (

          <div>
              
               <div className="control-container">
                    {this.state.movies.map((movie)=>{ //to change the length of the title of the movie 
                        let {title} = movie
                        if (title.length > 40) {
                            title = title.substr(0,37)+"..."
                        }
                    return( 
                    <div> 
                         <img className="movies-img" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/> 
                         <div className="movies-title">{title}</div>
                    </div> 
                    )
                })}
                </div>
          </div>
        );
    }
}

export default Movie;


