import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import countriesJson from './countries.json'
import Navbar from './components/Navbar'
import CountryDetails from './components/CountryDetails'



class App extends Component {

  state = {
    countries: []
  }

  componentDidMount(){
    fetch ('./countries.json')
          .then(() => {
            console.log('data fetched')
            this.setState({
              countries: countriesJson
            })

          })
          .catch(() => {
              console.log('error')
          })

  }

  render() {
    const {countries} = this.state
    return (
      <div className="container">
        <Navbar />
            <div className="row">
              <div className="col">
              {
                countries.map((countries, index) => {
                  return <div key={index}>
                  <Link to={`/countrie/${countries.cca3}`} className="list-group-item list-group-item-action">{countries.flag} {countries.name.official}</Link>
                  </div>
                })
              }
              </div>
              <div className="col order-5">
              <Route path='/countrie/:id' component={CountryDetails}/>
              </div>
            </div>
      </div>

    )
  }
}

export default App;
