import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class CountryDetails extends Component {

    state = {
        countrie: {}
    }

    getCountrie = () => {
        let id = this.props.match.params.id
        fetch (`../countries.json`)
          .then((response) => {
              console.log(id)
              return response.json()
              /*let countrie = {
                  id: id,
                  name: countries.name.official,
                  capital: countries.capital,
                  area: countries.area,
                  borders: countries.borders
              }
              this.setState({
                  countrie: countrie
              })*/    
          })
          .then((findresponse) => {
              this.setState({data: findresponse})
          })
          .catch(() => {
              console.log('error')
          })

        }

        componentDidMount() {
            console.log('it is working')
            this.getCountrie()
        }

        componentDidUpdate() {
            let id = this.props.match.params.id
            if (this.state.countrie.id !== id) {
                this.getCountrie()
            }

        }


    render() {
        //const {countrie: {name, capital, area, borders, id}} = this.state
        return (
            <div>
                <div className="col-7">
            <h1>{this.state.data.name}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="width: 30%">Capital</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                   km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><Link to={`/countrie`}></Link></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
        )
    }
}

export default CountryDetails