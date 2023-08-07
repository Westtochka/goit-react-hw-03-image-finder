import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return <ul>{this.props.children}</ul>;
  }
}









// import { Component } from 'react'

// export class ImageGallery extends Component{
// state={
//     text:null,
// }

/* <ul class="gallery">
  <!-- Набір <li> із зображеннями -->
</ul> */
// componentDidUpdate(prevProps, prevState){
//     if(prevProps.text!==this.props.text){ 
//         console.log('Изменился текст инпута!')
//     }

// }
// render(){
//     return <div>
//         <h1>ImageGallery</h1>
//         <p>{this.props.text}</p>
//         </div>
// }

// }

