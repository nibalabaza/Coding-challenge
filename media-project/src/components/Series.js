import React from 'react';
import '../css/series.css';

class Series extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            series : [],
            loading: true,
            error: false
        }
    }

    componentDidMount = () =>{
        const delay = ms => new Promise(resolve=>setTimeout(resolve,ms)) //create a new promise(setTime) before fetching the data. //resolve is a function that works with the promise (we transform the callback function with the promise function) // setTime takes 2 parameters(min) the first one is the callback and the second one is the number of ms before excuting a callback
        delay(800)
        .then(()=>
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=1881edab174e49d70809ac509b38c4a5"))
        .then(response => {
            return response.json();
        })
        .then((data) => {
              console.log(data);
              const cleanedData = data.results.filter(serie => new Date(serie.first_air_date).getFullYear() >= 2010 )//get full year extract a numeric value for the year of a data object - (movie is like a parameter inside a function) // the filter should be before the setState which display all of the movies
              this.setState({series : cleanedData.slice(0,18), loading: false }); //display the 18 movies from the cleanedData which will do the filter of the data
            //   this.setState({series : data.results, loading: false });
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
          <div className = "series-body">
              <div className="control-container">
                    {this.state.series.map((serie,i)=>
                <div><img className="series-img" src={`https://image.tmdb.org/t/p/w500/${serie.backdrop_path}`}/>
                <div className="series-title">{serie.name}</div>
                </div>
               
                
                )}
                </div>
          </div>
        );
    }
}

export default Series;