import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "./Data.json";
import React from 'react';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allBeasts : Data,
      selectedBeast : {},
      showModal : false,

    }
  }

  displayBeast = (beast) => {
    this.setState({showModal : true,selectedBeast : beast})
    

  }

  hideBeast = () => {
    this.setState({showModal : false})
  }


  filterHorns = (e) => {

    const hornNumber = parseInt(e.target.value);
    let filteredData = Data ;
    if(hornNumber){
      filteredData = Data.filter((item)=>item.horns===hornNumber)
    }
    this.setState({allBeasts : filteredData});
  }





  render () {
    return (
      <div className="App">
        <Header/>
        <Main dt={this.state.allBeasts}  display={this.displayBeast} sta={this.filterHorns}/>
        <SelectedBeast show={this.state.showModal} handleClose={this.hideBeast} info={this.state.selectedBeast}/>
        <Footer/>
      </div>
    );
  }

}

export default App;
