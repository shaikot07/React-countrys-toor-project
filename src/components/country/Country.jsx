import { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountry,handleVisitedFlages}) => {
      const {name, flags,population,area,cca3} = country;

      const [visited, setVisited]=useState(false)

      const handleVisited = () =>{
            setVisited(!visited)
      }

      return (
            <div className='country'>
                  <h3>name:{name?.common}</h3>
                  <img src={flags.png} alt="" />
                  <p>population:{population}</p>
                  <p>Area:{area} </p>
                  <p> <small>Code:{cca3} </small> </p>
                  <button onClick={() =>handleVisitedCountry(country)}>Mark Visited</button>
                  <button onClick={()=>handleVisitedFlages(country.flags.png)}>Add Flages</button>
                  <br />
                  <button onClick={handleVisited }>{visited ? 'visited' : 'Going'}</button>
                  {
                        visited ? 'i have visited this country' :'i Want to visit'
                  }

            </div>
      );
};

export default Country;