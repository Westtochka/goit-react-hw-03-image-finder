import { Component } from 'react';
// import { ImageGallery } from "./ImageGallery/ImageGallery";
// import {Searchbar} from './Searchbar/Searchbar';
// import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem'
// import {ToastContainer} from 'react-toastify';

class App extends Component{
  state={
    loading: false,
    text:'',
    hits:[],
  }
  handleTextChange=(e)=> {
    e.preventDefault()
    this.setState({text : e.currentTarget.value.toLowerCase()})
    // console.log(e.currentTarget.value)
  }
  handlerSubmit = (e) => {
    e.preventDefault();
    const {text} = this.state;
    if(text.trim()===''){
      alert("Enter new text");     
      return 
    }
    // this.onSubmit({text});
    // this.setState({
    //   text:'',
    // })
    // this.setState({text})
    this.setState({text:'',})
  };
// handleFormSubmit=text=>{console.log(text)
// this.setState({text})}

componentDidUpdate(prevProps, prevState){
  if(this.state.text !== prevState.text){ 
      console.log('Изменился текст инпута!')
      console.log(this.state.text)
      console.log(prevState.text)

fetch(`https://pixabay.com/api/?q=${this.state.text}&page=1&image_type=photo&orientation=horizontal&per_page=12&key=36749422-339c82364b645e4ed63871096`)
.then(response=>{
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error('нет такого изображения'));
})
.then(data => {const hitsArray = data.hits;
  this.setState({ hits: hitsArray }) 
})
.catch(error => console.error('Error fetching data:', error));
}
}

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
      {/* {this.state.hits &&  'Hello'} */}
   
      {/* <Searchbar 
      onSubmit={this.handleFormSubmit}/>    */}
      {/* <ToastContainer/> */}
      {/* <ImageGallery /> */}
      {/* <ImageGalleryItem text={this.state.text}/>  */}
      {/* <Loader/>
      {this.state.hits &&  <Button/>}     
      <Modal/> */}
       <header >
<form class="form" onSubmit={this.handlerSubmit}>
 <button type="submit" class="button">
<span class="button-label">🔍</span>
 </button>

<input
   class="input"
       type="text"
       name="text"
       value={this.state.text}
       placeholder="Search images and photos"
       onChange={this.handleTextChange}
     />
   </form>
 </header>   

    <ul>
      {this.state.hits.map(hit => (
        <li key={hit.id}>
          <img src={hit.previewURL} alt={hit.tags} />
        </li>
              ))}
    </ul>  
    </div>)}

}

export default App
