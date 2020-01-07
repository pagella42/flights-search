import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './search.css'
import routes from '../../routes.json';
import SearchCard from '../../components/SearchCard.js';

export default function Search() {
    const [isOrigin, setIsOrigin] = useState(true);
    const [selected, setSelected] = useState({});

    let selectFlight = origin => {
        setIsOrigin(false);
        setSelected(origin);
    };
    return (
        <div className="search-cont">
            <div className="search-title">{isOrigin ? 'Select origin Airport' : `Select destination departing from ${selected.location.cityName}`}</div>
            <div className="cards-cont">
                {isOrigin
                ? routes.routes.map(r =>
                    <div className="card-link" onClick={() => { selectFlight(r) }}>
                        <SearchCard location={r} available={true} />
                    </div>
                )
                : selected.destinations.map(r =>
                    r.availability ?
                        <Link className="card-link"  to={{ pathname:`/flights/${selected.code}-${r.code}`, state: {origin: selected.description,destination:r.description} }}  >
                            <SearchCard location={r} available={true}/>
                        </Link> :
                        <div className="unavailable-card">
                            <SearchCard location={r} available={false}/>
                        </div>)}
            </div>
            
        </div>
    );
}
