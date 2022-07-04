import React from "react";

export class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioStations: [
        "https://www.20ftradio.net/",
        "https://gasolineradio.com/",        
      ],
      currentStation: 'https://www.20ftradio.net/',
      
      gasonline: "https://gasolineradio.com/",
      _20fit: "https://www.20ftradio.net/",
      radiolla: "https://radiolla.com/",
    };

    this.chooseStation = this.chooseStation.bind(this);
  }

  chooseStation(e){
    this.setState({currentStation: e.target.value});
    }

  render() {
      return (
          <div className="radio-container">
          <SelectStation stations={this.state.radioStations} changeFunc={this.chooseStation} />;     
        <object type="text/html" data={this.state.currentStation} width="100%" height="100%" border="0" title="radio page"></object>
      </div>
    );
  }
}

function SelectStation(props) {    
    let elems = props.stations.map(item => <option value={item}>{item}</option>)
  return (
    <select onChange={props.changeFunc}>
      {elems}
    </select>
  );
}
