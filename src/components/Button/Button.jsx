import PropTypes from 'prop-types';
import styles from './Button.module.css'

const Button = ({ onBtnClick }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.button} type="button" onClick={onBtnClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func,
};

export default Button;
