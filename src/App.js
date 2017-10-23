import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PictureGallery from './components/PictureGallery/PictureGallery';


class App extends Component {
constructor() {
    super();
    
    this.state = {
      pictures: " "      
    };
this.getImg = this.getImg.bind(this);
   }
   
getImg(){axios.get(`/api/dogs`).then(response => {
     this.setState({ pictures: response.data.message});
    }).catch(console.log("SAD RATS"));
}

  render() {
    return (
    <div className="app">
         <div>
           <h1 className="Sparkle">Rat Sanctuary </h1>
        </div>
      
      <div className ="rats">
        <PictureGallery pictures={this.state.pictures} /> 
        </div>
           
      <div className="random">
          <button className="btn" onClick={() => this.getImg()}> Cute rats! </button>
      </div>
       
    </div>
          
    );
  }
}

export default App;
