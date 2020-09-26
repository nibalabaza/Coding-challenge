import React from 'react';

class Series extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            series : []
        }
    }

    componentDidMount = () =>{
        fetch("https://api.themoviedb.org/3/movie/550?api_key=37e2edabd3d3cef17f9c9cb9e95c67a3")
        .then(response => {
            return response.json();
        })
        .then((data) => {
              console.log(data);
              this.setState({series : data});
        })
    }

     render() {
        return (
          <div>
              <ul>
                    {this.state.series.map((serie,i)=>
                <li>{serie}</li>)}
                </ul>
          </div>
        );
    }
}

export default Series;