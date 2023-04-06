import React from "react";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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
  dateChange = (date) => {
    this.setState({
        date: date,
    });
};
  handleSubmit(event) {
    //console.log('Cart or Bike Options: ' + this.state.value + ' ' + this.state.date.toLocaleDateString());


    if((this.state.date.toLocaleDateString() == '5/5/2023') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-5-2023';
    }
    if((this.state.date.toLocaleDateString() == '5/6/2023') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-6-2023';
    }
    if((this.state.date.toLocaleDateString() == '5/7/2023') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-7-2023';
    }


    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='flex-sm heroForm'>
        <div className='forty inputContainer'>
          <label>
            <span>Pick your Date:</span>
            <DatePicker
              type="text"
              name="date"
              //dateFormat="dd/MM/yyyy"
              selected={this.state.date}
              onChange={this.dateChange}
              placeholderText="Pick Rental Date"
            />
          </label>
        </div>
        <div className='forty inputContainer'>
        <label>
          <span>Pick your favorite flavor:</span>
          <select value={this.state.value} onChange={this.handleChange}>            
            <option value="">Cart or Bike Options</option>
            <option value="cartrental">Golf Cart Rental</option>
            <option value="bikerental">Bike Rental</option>
          </select>
        </label>
        </div>
        <button type="submit" className='inputButton'>Reserve Now</button>
        
      </form>
    );
  }
}


export default MainForm;







