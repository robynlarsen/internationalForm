import React, { Component } from 'react'
import CountriesSelect from './CountriesSelect'

import './field.css'

class Field extends Component {
  render() {
    return (
      <div className="field"  style={{width: this.props.width}}>
        <div className={`${this.props.name === 'select' ? 'field-select' : 'field-input'}`}>
          <label className={ `field-label ${this.props.labelHidden ? 'u-screenReader' : ''}` } htmlFor={this.props.name}>
            {this.props.placeholder}
          </label>
          { 
            (this.props.name === 'select' && this.props.options) ? 
            <CountriesSelect { ...this.props }/>
            :
            <input {...this.props} />
          }
        </div>
      </div>
    );
  }
}

export default Field;
