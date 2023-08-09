import PropTypes from 'prop-types';


const Button = ({ onBtnClick }) => {
  return (
    <div>
      <button type="button" onClick={onBtnClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func,
};

export default Button;
