import React, { Component } from 'react';

import './PictureGallery.css';



export default class PictureGallery extends Component {
  constructor(props) {
    super(props);
      
  }
render(){
 
// const {
//     deleteHero,
//     selectOneHero
// } = this.props;
    return(
      <div className="pics">
       
     <img src={this.props.pictures}alt ="broken"/>
    
   
    </div>
        
    )
}

  }