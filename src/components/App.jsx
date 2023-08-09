import { Component } from 'react';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem'
import {Loader} from './Loader/Loader'
import Button from './Button/Button'
import Modal from './Modal/Modal'

// import {ToastContainer} from 'react-toastify';

class App extends Component{
  state={
    text:'',
    hits:[],
    page: 1,
    totalHits: 0,
    loading: false,
    showModal: false,
    status: 'idle'
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    const {text} = this.state;
    if(text.trim()===''){
      alert("Enter new text");     
      return 
    }
    this.setState({text:'',})
  };
handleFormSubmit=text=>{console.log(this.state)
this.setState({text})}

handleImageClick = (imageURL) => {
  this.setState({ showModal: true, largeImageURL: imageURL }
    );
};
handleModalClick = () => {
  this.setState({ showModal: false, largeImageURL: '' });
};
buttonLoadClick = () => {
  this.setState(prevState => ({ page: prevState.page + 1 }));
};


componentDidUpdate(prevProps, prevState){
  if(this.state.text !== prevState.text){ 
  console.log('Изменился текст инпута!')
  this.setState({ loading: true });
// this.setState({status: 'pending'})
fetch(`https://pixabay.com/api/?q=${this.state.text}&page=1&image_type=photo&orientation=horizontal&per_page=12&key=36749422-339c82364b645e4ed63871096`)
.then(response=>{
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error('нет такого изображения'));
})
.then(data => {const hitsArray = data.hits;
  if(hitsArray.length !== 0){
  this.setState({ hits: hitsArray, status:'resolved',loading: false}, ()=>{
    console.log(hitsArray)
    console.log(this.state.hits)
  });
  ;}
  else{
    this.setState({ loading: false });
  alert('I am sorry...There are no images for you')}
})

// this.setState({ hits: hitsArray, status: 'resolved' }, () => {
//   console.log('Updated state:', this.state.hits);
// });

.catch(error => this.setState({status:'rejected' , loading: false}))
}
}

render(){
  const { hits, loading, largeImageURL, showModal, totalHits  }=this.state;

  // if(status ==='idle'){
  //   return <div>Введите название картинки</div>
  // }

  // if(status ==='pending'){
  //   return <div>Загружаем...</div>
  // }

  // // if(status ==='rejected'){
  // //   return <h1>{error.message}</h1>
  // // }

  // if(status ==='resolved'){
  //   return 
  // }

    return (<div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >

        <Searchbar 
        onSubmit={this.handleFormSubmit}/>   
      {hits.length !== 0 && (
          <ImageGallery>
            <ImageGalleryItem hits={hits} onImage={this.handleImageClick} />
          </ImageGallery>
        )} 
        {/* <ToastContainer/> */}
        {loading && <Loader />}
        {totalHits > 0 && hits.length < totalHits && (
          <Button onBtnClick={this.buttonLoadClick} 
          />
        )} 
       {showModal && (
          <Modal onClose={this.handleModalClick}>
            <img src={largeImageURL} alt="Modal" />
          </Modal>
        )}
      </div>
       )
  
 }

}

export default App
