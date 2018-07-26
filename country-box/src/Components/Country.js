import React, { Component } from 'react';

class Country extends Component {
    render() {
      return (
        <div className="countrybox-container">
        {
            this.props.country.map((country, i) => {
                return(
                    <div className="countrybox-container__card" key={i}>
                        {country.name}
                        <img src={country.image} alt="Cuntry"/>
                        <div className="countrybox-container__card__footer" style={{marginTop: '5px'}}>
                            <div> {country.Religions} </div>
                            <div> {country.Languages} </div>
                            <div> {country.Population} </div>
                            </div>
                            <div className="countrybox-container__card__footer countrybox-container__card__footer--sub">
                                <div> Religions </div>
                                <div> Languages </div>
                                <div> Population </div>
                                </div>
                        </div>
                )
            })
        }
        </div>
      );
    }
  }
  
  export default Country;
