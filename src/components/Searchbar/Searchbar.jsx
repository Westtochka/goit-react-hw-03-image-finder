import { Component } from 'react'
import {toast} from 'react-toastify'

export class Searchbar extends Component{
  state={
        text:'',
  }
  handleTextChange=(e)=> {
  e.preventDefault()
  this.setState({text : e.currentTarget.value.toLowerCase()})
}
  
  handlerSubmit = (e) => {
    e.preventDefault();
    const {text} = this.state;
    if(text.trim()===''){
      toast.error('Wow so easy!');
      ;
    }
    // const notify = () => toast("Wow so easy!");

    
    // console.log(this.state)
    this.props.onSubmit({text});
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
      //  autocomplete="off"
      //  autofocus
       placeholder="Search images and photos"
       onChange={this.handleTextChange}
     />
   </form>
 </header> 
 )

  }}

