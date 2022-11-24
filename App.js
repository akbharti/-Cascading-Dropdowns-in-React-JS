// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const countries = [
    { id: '1', name: 'INDIA' },
    { id: '2', name: 'USA' }
  ]

  const states = [
    { id: '1', countryId: '1', name: 'Bihar' },
    { id: '2', countryId: '1', name: 'UP' },
    { id: '3', countryId: '1', name: 'WB' },
    { id: '4', countryId: '1', name: 'Karnataka' },

    { id: '5', countryId: '2', name: 'LA' },
    { id: '6', countryId: '2', name: 'California' },
    { id: '7', countryId: '2', name: 'Texas' },
  ]

  const cities = [
    { id: '1', stateId: '1', name: 'Bhagalpur' },
    { id: '2', stateId: '1', name: 'Kahalgaon' },

    { id: '3', stateId: '2', name: 'Banaras' },
    { id: '4', stateId: '2', name: 'Ayodhiya' },

    { id: '5', stateId: '3', name: 'Kolkata' },
    { id: '6', stateId: '3', name: 'Durgapur' },

    { id: '7', stateId: '4', name: 'Belgaum' },
    { id: '8', stateId: '4', name: 'Bangalore' },

    { id: '9', stateId: '5', name: 'LA city-1' },
    { id: '10', stateId: '5', name: 'LA city-2' },

    { id: '11', stateId: '6', name: 'California City-1' },
    { id: '12', stateId: '6', name: ' California City-2' },

    { id: '13', stateId: '7', name: 'Texas City-1' },
    { id: '14', stateId: '7', name: 'Texas City-2' },
  ]

  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setCountry(countries);
    // eslint-disable-next-line 
  }, [])

  const handleCountry = (id) => {
    const newState = states.filter(item => id === item.countryId);
    setState(newState);
  }

  const handleState = (id) => {
    console.log('state: ', id)
    const newCity = cities.filter(item => id == item.stateId);
    console.log('newCity ', newCity );
    setCity(newCity);
  }

  return (
    <div className="App">
      <select id='ddlCountry' className='form-control select-class' onChange={(e) => handleCountry(e.target.value)}>
        <option value='0'>Select Country</option>
        {
          country &&
            country !== undefined ?
            country.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>{ctr.name}</option>
              )
            })
            : 'No Country'
        }
      </select>

      <br />

      <select id='ddlStates' className='form-control select-class' onChange={(e) => handleState(e.target.value)}>
        <option value='0'>Select State</option>
        {
          state &&
            state !== undefined ?
            state.map((st, index) => {
              return (
                <option key={index} value={st.id}>{st.name}</option>
              )
            })
            : 'No state'
        }
      </select>

      <br />

      <select id='ddlCities' className='form-control select-class'>
        <option value='0'>Select City</option>
        {
          city &&
          city !== undefined ?
          city.map((ct, index) => {
              return (
                <option key={index} value={ct.id}>{ct.name}</option>
              )
            })
            : 'No City'
        }
      </select>

    </div>
  );
}

export default App;
