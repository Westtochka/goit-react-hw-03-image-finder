import styles from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ hits, onImage }) => {
  return (
    <>    
           {hits.map(hit => (
          <li className={styles.galeryItem} key={hit.id}>
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
