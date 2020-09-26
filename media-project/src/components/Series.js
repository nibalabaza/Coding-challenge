import React from 'react';

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
              <ul>
                    {this.state.series.map((serie,i)=>
                <li>{serie.name}</li>)}
                </ul>
          </div>
        );
    }
}

export default Series;