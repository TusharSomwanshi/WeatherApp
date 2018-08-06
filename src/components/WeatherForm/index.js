import React from 'react'
import { FormControl, FormGroup, Button } from 'react-bootstrap';

const Form = ({ cityName, handleCitynameChange, getWeatherData, errorMessage, renderMessage }) => (
    <div>
        <form>
        <h1 className="text-center page-title">Get Weather</h1>
        <FormGroup className="searchBar">
            <FormControl
                className="text-center"
                type="text"
                placeholder="Enter City Name"
                value={cityName}
                onChange={handleCitynameChange}
            />
        </FormGroup>
        <span style={{ color: 'red' }}>{errorMessage}</span> <br />
        <Button bsStyle="primary" onClick={() => getWeatherData()}>Search</Button><br />
        { renderMessage() } 
        </form>
    </div>
)

export default Form;