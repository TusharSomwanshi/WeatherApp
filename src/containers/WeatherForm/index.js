import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from './action'
import Form from '../../components/WeatherForm';
import { getWeatherForcast, getTemperatureInfo } from './selector';

class WeatherForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityName: '',
            isLoading: false
        }
    }

    handleCitynameChange = (e) => {
        this.setState({
            cityName: /^[a-zA-Z\s]*$/.test(e.target.value) ? e.target.value : ''
        })
        this.props.setErrorMessage('');
        this.props.setWeatherData({});
    }

    getWeatherData = () => {
        this.setState({
            isLoading: true
        })
        this.props.getWeatherData(this.state.cityName)
    };

    renderMessage = () => {
        const { isLoading, cityName } = this.state;
        const { temperatureInfo, weatherForcast } = this.props;
        if(!isLoading && temperatureInfo.temp){
          return <h3>Fetching Weather...</h3>;
        } else if (cityName && temperatureInfo.temp) {
          return (
            <div>
              <span className="text-info"><h3>It's {temperatureInfo.temp} Celcius in {cityName}</h3></span>
              <span className="text-info"><h4>{weatherForcast[0].description}</h4></span>
            </div>
            );
        }
      }

    render(){
        return(
            <Form 
                cityName={this.state.cityName} 
                handleCitynameChange={this.handleCitynameChange} 
                getWeatherData={this.getWeatherData}
                errorMessage={this.props.errorMessage}
                renderMessage={this.renderMessage}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
     weatherForcast : getWeatherForcast(state),
     temperatureInfo : getTemperatureInfo(state),
     errorMessage: state.weather.errorMessage
    };
  };
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
          ...actions,
      },
      dispatch
  );

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WeatherForm);