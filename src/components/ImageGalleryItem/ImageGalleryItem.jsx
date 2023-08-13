export const ImageGalleryItem = ({ hits, onImage }) => {
  return (
    <>    
           {hits.map(hit => (
          <li key={hit.id}>
            <img src={hit.previewURL} alt={hit.tags} 
             onClick={() => onImage(hit.webformatURL)
          }/>
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
