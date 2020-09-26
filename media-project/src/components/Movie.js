import React from 'react';

class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies :[]
        }

    }

    componentDidMount = () =>{
        fetch("https://api.themoviedb.org/3/discover/movie/?api_key=1881edab174e49d70809ac509b38c4a5")
        .then(response => {
            return response.json();
        })
        .then((data) => {
              console.log(data);
              this.setState({movies : data.results});
        })
    }

     render() {
        return (
          <div>
               <ul>
                    {this.state.movies.map((movie,i)=>
                <li></li>)}
                </ul>
          </div>
        );
    }
}

export default Movie;


{/* <img src= `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`/> */}