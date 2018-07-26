import React, { Component } from 'react';
import BoxFilter from './BoxFilter';
import Country from './Country';

class Box extends Component {
    render() {
      return (
        <div className={this.props.countryboxopen ? "fadeIn Box-container" : "hide"}>
        <BoxFilter
         keyWord={this.props.keyWord}
         filterCountry={this.props.filterCountry}
         filterType={this.props.filterType}
         setKeyword={this.props.setKeyword}
        />

        <Country 
        country={this.props.country}
        />

        </div>
      );
    }
  }
  
  export default Box;
