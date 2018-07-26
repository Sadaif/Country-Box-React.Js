import React, { Component } from 'react';

class BoxFilter extends Component {
    constructor(props){
        super(props)
        
        this.changeKeyword = this.changeKeyword.bind(this)
         
    }
    changeKeyword(e){
        this.props.setKeyword(e.target.value)
    }
     
     
    render() {
      return (
        <div className="countryFilter-container">
        <div>
            <i className="fa fa-search" > </i>
            <input
            value={this.props.keyWord}
            placeholder="Search..."
            onChange={this.changeKeyword}
            />
            </div>
             
            <div>
            <i  className="fa fa-filter" ></i>
            <p>By Name</p>
                  </div>
        </div>
      );
    }
  }
  
  export default BoxFilter;
