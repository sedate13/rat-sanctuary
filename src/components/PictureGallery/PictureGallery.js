import React, { Component } from 'react';
import './PictureGallery.css';



export default class PictureGallery extends Component {
  constructor(props) {
    super(props);
      
  }
render(){
  console.log(this.props.pictures);
    return(
    <div className="gif">
  
     
      <div className="pics" style ={ {backgroundImage:`url(${this.props.pictures})`}}>  
     {/* <img src={this.props.pictures}alt =" "/> */}
</div>
    
    
    </div>
     )
}
 }