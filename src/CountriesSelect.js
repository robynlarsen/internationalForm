import React from 'react';
import './field.css';

const CountriesSelect = (props) => {
  return (
		<select name="country" onChange={ props.onChange } value={props.value}>
		  {
		    props.options.map(country => {
		      return ( <option key={country} value={country}>{ country }</option> )
		    })
		  }
		</select>	
  )
}

export default CountriesSelect;