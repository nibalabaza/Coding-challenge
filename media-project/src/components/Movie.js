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
        const delay = ms => new Promise(resolve=>setTimeout(resolve,ms)) //create a new promise(setTime) before fetching the data. //resolve is a function that works with the promise (we transform the callback function with the promise function) // setTime takes 2 parameters(min) the first one is the callback and the second one is the number of ms before executing a callback
        delay(800)
        .then(()=>
        fetch("https://api.themoviedb.org/3/discover/movie/?api_key=1881edab174e49d70809ac509b38c4a5"))
        .then(response => {
            return response.json();
        })
        .then((data) => {
              console.log(data);
              const cleanedData = data.results.filter(movie => new Date(movie.release_date).getFullYear() >= 2010 )//get full year extract a numeric value for the year of a data object - (movie is like a parameter inside a function) // the filter should be before the setState which display all of the movies
              this.setState({movies : cleanedData.slice(0,18), loading: false }); //display the 18 movies from the cleanedData which will do the filter of the data
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
            return <div className="error">Something went wrong</div>;
          }
        if (this.state.loading) {
            return <div className="error">loading...</div>;
          }
    
        return (
          <div className= "movies-body">
              <div className="control-container">
                    {this.state.movies.map((movie,i)=>{ //to change the length of the title of the movie 
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


