import React from 'react';
import '../css/series.css';

class Series extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            series : []
        }
    }

    componentDidMount = () =>{
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=1881edab174e49d70809ac509b38c4a5")
        .then(response => {
            return response.json();
        })
        .then((data) => {
              console.log(data);
              this.setState({series : data.results});
        })
    }

     render() {
        return (
          <div>
              <div className="control-container">
                    {this.state.series.map((serie,i)=>
                <div><img className="series-img" src={`https://image.tmdb.org/t/p/w500/${serie.backdrop_path}`}/></div>
               
                
                )}
                </div>
          </div>
        );
    }
}

export default Series;