import { Component } from 'react'
// import {toast} from 'react-toastify'
// import PropTypes from 'prop-types';

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
 )

  }}

  // Searchbar.propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };
