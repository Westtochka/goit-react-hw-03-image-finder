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
    // status: 'idle'
  }

  // handlerSubmit = e => {
  //   e.preventDefault();
  //   const {text} = this.state;
  //   if(text.trim()===''){
  //     alert("Enter new text");   
  // console.log('hh')  
  //     return 
  //   }
  //   this.setState({text:'' }
    
  // )
  // console.log('hh')
  // }


handleFormSubmit=text=>{
this.setState({
  text,
  hits: [],
  page: 1,
  totalHits: 0,
})
}

handleImageClick = (imageURL) => {
  this.setState({ showModal: !this.state.showModal, largeImageURL: imageURL }
    );
    console.log(this.state.showModal)
    console.log(this.state.totalHits)
};
handleModalClick = () => {
  this.setState({ showModal: false, largeImageURL: '' });
  // console.log(this.state.showModal)
  // console.log(this.state.totalHits)
};
buttonLoadClick = () => {
  this.setState((prevState) => ({
    page: prevState.page + 1,
    }));
};


componentDidUpdate(prevProps, prevState){
  const { text, page  } = this.state;
  if(text !== prevState.text || prevState.page !== page){ 
    this.fetchData();
  }}


  fetchData = () => {
    const { text, page } = this.state;
  
    this.setState({ loading: true });
  
    fetch(`https://pixabay.com/api/?q=${text}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=36749422-339c82364b645e4ed63871096`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('нет такого изображения'));
      })
      .then(data => {
        const hitsArray = data.hits.map(hit => ({
          ...hit,
          id: hit.id + page,
        }));
        console.log(`You have ${data.totalHits} images`)
        if (hitsArray.length !== 0) {
          this.setState(prevState => ({
            hits: [...prevState.hits, ...hitsArray],
            totalHits: data.totalHits,
            loading: false
          }));
        } else {
          this.setState({ loading: false });
          alert('I am sorry...There are no images for you');
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  };

render(){
  const { hits, loading, largeImageURL, showModal, totalHits}=this.state;

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
          // display: 'flex',
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
        {totalHits >= 0 && hits.length < totalHits && (
          <Button onBtnClick={this.buttonLoadClick} 
          />
        )} 
       {showModal && (
          <Modal onClose={this.handleModalClick}>
            <img src={largeImageURL} alt="BigImage" />
          </Modal>
        )}
      </div>
       )
  


 }

}

export default App
