import React, { Component } from 'react';
import Box from './Box';

class CountryBox extends Component {
    render() {
      return (
        <div style={{position: "relative"}}>
        <div
        className={this.props.countryboxopen ? "countrybox--open" : "countrybox" }
        onClick={this.props.openCountrybox} >
        <div className={this.props.countryboxopen ? "countrybox--open_divider" : "countrybox_divider"}></div>
        <div className={this.props.countryboxopen ? "countrybox--open_circle" : "countrybox_circle"}></div>  
            </div>
            <Box 
            	  keyWord={this.props.keyWord}
                
                  filterCountry={this.props.filterCountry}
                  filterType={this.props.filterType}
                  setKeyword={this.props.setKeyword}
                  country={this.props.country}
                  countryboxopen={this.props.countryboxopen}
            
            />
        </div>
      );
    }
  }
  
  export default CountryBox;
