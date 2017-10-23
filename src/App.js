import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PictureGallery from './components/PictureGallery/PictureGallery';




class App extends Component {

  constructor() {
    super();
    
    this.state = {
      pictures: " ",
      
      
    };
this.getImg = this.getImg.bind(this);
   }


  

  
  


  getImg(){axios.get(`/api/dogs`).then(response => {
     this.setState({ pictures: response.data.message});
     console.log(response);
    }).catch(console.log("SAD RATS"));

  }

//handleClick (){this.setState(
//baseUrl: this.setState.baseUrl +`chihuahua/images/random`});



  render() {
    return (
      <div className="app">
         <div>
           <h1 className="Sparkle">Rat Sanctuary </h1>
          </div>
        <div>
        <PictureGallery pictures={this.state.pictures} /> </div>
        <div><button className="btn" onClick={() => this.getImg()}> Cute rats! </button></div>
       
       
       </div>
        
      
    );
  }
}

export default App;
