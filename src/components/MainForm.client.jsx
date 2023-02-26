import React from "react";


//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";


class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentaloption: '',
      date: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
  
  handleSubmit(event) {
    //console.log('Cart or Bike Options: ' + this.state.value + ' ' + this.state.date.toLocaleDateString());

    if(this.state.value == '2personcart') {
      window.location.href = '/products/2-person-golf-cart-rental';
    }

    if(this.state.value == '4personcart') {
      window.location.href = '/products/4-person-golf-cart-rental';
    }

    if(this.state.value == '6personcart') {
      window.location.href = '/products/6-person-golf-cart-rental';
    }

    if(this.state.value == '24bike') {
      window.location.href = '/products/bicycle-rentals-24';
    }

    if(this.state.value == '26bike') {
      window.location.href = '/products/bicycle-rentals-26';
    }


    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='flex-sm heroForm'>
        <div className='fifty inputContainer'>
        <label>
          <span>Pick your favorite flavor:</span>
          <select value={this.state.value} onChange={this.handleChange}>            
            <option value="">Cart or Bike Options</option>
            <option value="2personcart">2-Person Cart</option>
            <option value="4personcart">4-Person Cart</option>
            <option value="6personcart">6-Person Cart</option>
            <option value="24bike">24" Bike</option>
            <option value="26bike">26" Bike</option>
          </select>
        </label>
        </div>
        

        <button type="submit" className='inputButton fifty'>Reserve Now</button>
        
      </form>
    );
  }
}


export default MainForm;







