import React, { Component } from 'react';
import './App.css';

import Field from './Field';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: { 
        canada: [
          { name: 'first_name', placeholder: "First Name", width: '50%'},
          { name: 'last_name', placeholder: "Last Name", width: '50%'},
          { name: 'address', placeholder: "Address", width: '75%' },
          { name: 'apt_suite', placeholder: "Apt/Suite", width: '25%' },
          { name: 'city', placeholder: "City", width: '100%' },
          { name: 'select', placeholder: 'select', width: '50%' },
          { name: 'postal_code', placeholder: "Postal code", width: '50%' }
        ],  
        japan: [
          { name: 'last_name', placeholder: "Last Name", width: '50%'},
          { name: 'first_name', placeholder: "First Name", width: '50%'},
          { name: 'postal_code', placeholder: "Postal code", width: '100%' },
          { name: 'select', placeholder: 'select', width: '100%' },
          { name: 'city', placeholder: "City", width: '100%' },
          { name: 'address', placeholder: "Address", width: '100%' },
          { name: 'apt_suite', placeholder: "Apt/Suite", width: '100%' },
        ], 
        india: [
          { name: 'first_name', placeholder: "First Name", width: '50%'},
          { name: 'last_name', placeholder: "Last Name", width: '50%'},
          { name: 'address', placeholder: "Address", width: '100%' },
          { name: 'city', placeholder: "City", width: '100%' },
          { name: 'apt_suite', placeholder: "Apt/Suite", width: '100%' },
          { name: 'select', placeholder: 'select', width: '50%' },
          { name: 'postal_code', placeholder: "Postal code", width: '50%' }
        ]
      },
      countrySelected: 'canada' 
    }
  }

 
  handleChange = (event) => {
    this.setState({
      countrySelected: event.target.value    
    });
  }
 

  selectedFields = () => {
    return this.state.fields[this.state.countrySelected]
  }

  render() {
    const countries = Object.keys(this.state.fields);
    return (
      <div className="container">
        <h1 className="type-title">Shipping Address</h1>
        <div>
          <form className="form" onSubmit={ this.handleSubmit }>
            { 
              this.selectedFields().map(item => {
                return <Field key={item.name} name={item.name} placeholder={item.placeholder} width={item.width} labelHidden={true} onChange={ this.handleChange } options={ countries } />
              })
            } 
          </form>
        </div>
      </div>
    );
  }
}

export default App;
