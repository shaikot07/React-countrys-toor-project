import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'


const Countries = () => {
      const [countries, setCountries] = useState([]);
      const [visitedCountries, setVisitedCountries] = useState([])
      const [visitedFlages, setVisitedFlages] = useState([])

      useEffect(() => {
            fetch('https://restcountries.com/v3.1/all')
                  .then(res => res.json())
                  .then(data => setCountries(data))
      }, [])


      const handleVisitedCountry = (country) => {
            const newVisitedCountry = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountry)
      }

      const handleVisitedFlages = (flag) => {
            const newVisitedFlages = [...visitedFlages, flag];
            setVisitedFlages(newVisitedFlages)
      }

      return (
            <div>
                  <div>
                        <h1>Countries: {countries.length} </h1>
                        {/* visited Country  */}
                        <div>
                              <h4>Visited Countrise:{visitedCountries.length} </h4>
                              <ul>
                                    {
                                          visitedCountries.map(country => <li key={country.cca3}> {country.name.common} </li>)
                                    }
                              </ul>
                        </div>
                        <div className="visited-flag-img">
                              {
                                    visitedFlages.map(flag => <img src={flag} ></img>)
                              }
                        </div>
                        {/* display counterys  */}
                        
                  </div>
                  <div >
                              <div className="main-container">
                                    {
                                          countries.map(country => <Country key={country.cca3}
                                                country={country}
                                                handleVisitedCountry={handleVisitedCountry}
                                                handleVisitedFlages={handleVisitedFlages}
                                          ></Country>)
                                    }
                              </div>
                        </div>
            </div>
      );
};

export default Countries;