import { Component } from 'react'
// import {toast} from 'react-toastify'
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css'
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component{
  state={
        text:'',
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
       return }
    this.props.onSubmit(text);
    this.setState({
      text:'',
    })
    
  };
render(){
    return(
 <header className={styles.searchbar}>
<form className={styles.searchForm} onSubmit={this.handlerSubmit}>
<button type="submit" className={styles.searchFormButton}>
            <span className={styles.buttonLabel}>Search</span>
            <FcSearch className={styles.fc} />
          </button>

<input
   className={styles.input}
       type="text"
       name="text"
       value={this.state.text}
       placeholder="Search your pictures"
       onChange={this.handleTextChange}
     />
   </form>

 </header> 
 )

  }}

  Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
