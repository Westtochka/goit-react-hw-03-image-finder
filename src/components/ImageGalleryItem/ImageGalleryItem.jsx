// import { Component } from 'react'

// export class ImageGalleryItem extends Component{
// state={
//       hits:[],
    
// };


// render(){
// return (
//   <li >
//     <h1>ImageGallery</h1>
//     <p>{this.props.text}</p>
//     <ul>
//       {this.state.hits.map(hit => (
//         <li key={hit.id}>
//           <img src={hit.previewURL} alt={hit.tags} />
//         </li>
//       ))}
//     </ul>
//   </li>
// );

// }
// }


// import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ hits, onImage }) => {
  return (
    <>
      {hits.map(({ id, webformatURL, tags }) => (
        <li  key={id}>
          <img
            src={webformatURL}
            alt={tags}
            onClick={() => onImage(webformatURL)}
          />
        </li>
      ))}
    </>
  );
};

// ImageGalleryItem.propTypes = {
//   id: PropTypes.string,
//   webformatURL: PropTypes.string,
//   tags: PropTypes.string,
//   onImage: PropTypes.func,
// };
