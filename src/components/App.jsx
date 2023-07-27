import { Component } from 'react';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import {Searchbar} from './Searchbar/Searchbar';
import {ToastContainer} from 'react-toastify';

class App extends Component{
  state={
    hits: null,
    loading: false,
    text:'',
  }
// componentDidMount(){
//   this.setState({loading: true})
//   fetch('https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12&key=36749422-339c82364b645e4ed63871096')
// .then(res=>res.json())
// .then(hits=>this.setState({hits}))
// }

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
      onSubmit={this.handleFormSubmit}
      />   
      <ToastContainer/>
      <ImageGallery text={this.state.text}/>
    {/* <ImageGalleryItem/>
      <Loader/>
      {this.state.hits &&  <Button/>}     
      <Modal/> */}
   
    </div>)

};}

export default App
