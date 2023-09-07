import LabeledOutput from "./LabeledOutput"
import './CountryCard.css'

/* eslint-disable react/prop-types */
function CountryCard({country, onClick}){

    return(
        <div className="country">
            <img className="flag" src={country.flag}></img>
            <h1 className="country-name">{country.name}</h1>
            <LabeledOutput name="Capital" out={country.capital} />
            <LabeledOutput name="Population" out={country.population} />
            <LabeledOutput name="Currency" out={country.currency} />
            <LabeledOutput name="Languages" out={country.languages} />
            <button onClick={onClick}>Next</button>
        </div>
    )
}

export default CountryCard