import { Component } from 'react';
// import { ImageGallery } from "./ImageGallery/ImageGallery";
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem'
// import {ToastContainer} from 'react-toastify';

class App extends Component{
  state={
    loading: false,
    text:'',
  }

handleFormSubmit=text=>{console.log(text)
this.setState({text})}

render(){
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {this.state.hits &&  'Hello'}
   
      <Searchbar 
      onSubmit={this.handleFormSubmit}/>   
      {/* <ToastContainer/> */}
      {/* <ImageGallery /> */}
      <ImageGalleryItem text={this.state.text}/> 
      {/* <Loader/>
      {this.state.hits &&  <Button/>}     
      <Modal/> */}
   
    </div>)

};}

export default App
