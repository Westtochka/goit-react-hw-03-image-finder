import { Component } from 'react'

export class ImageGalleryItem extends Component{
state={
      hits:[],
    
};

componentDidUpdate(prevProps, prevState){
  if(prevProps.text!==this.props.text ){ 
      console.log('Изменился текст инпута!')
      console.log(prevProps.text)
      console.log(this.props.text)

fetch(`https://pixabay.com/api/?q=${this.props.text}&page=1&image_type=photo&orientation=horizontal&per_page=12&key=36749422-339c82364b645e4ed63871096`)
.then(response=>{
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error('нет такого изображения'));
})
.then(data => {const hitsArray = data.hits;
  this.setState({ hits: hitsArray }) 
})
// .then(console.log)
.catch(error => console.error('Error fetching data:', error));
}
}
render(){
return (
  <li >
    <h1>ImageGallery</h1>
    <p>{this.props.text}</p>
    <ul>
      {this.state.hits.map(hit => (
        <li key={hit.id}>
          <img src={hit.previewURL} alt={hit.tags} />
        </li>
      ))}
    </ul>
  </li>
);

}
}
