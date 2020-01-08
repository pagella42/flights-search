import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './search.css'
import routes from '../../routes.json';
import SearchCard from '../../components/SearchCard.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
    const [isOrigin, setIsOrigin] = useState(true);
    const [selected, setSelected] = useState({});

    let selectFlight = (origin, bool) => {

        if (bool) {
            setIsOrigin(false);
            setSelected(origin);
        }
        else {
            setIsOrigin(true);
            setSelected({});
        }
    };
    return (
        <div className="search-cont">
            {isOrigin ?
                <div className="search-title-origin"> Select origin Airport</div>
                :
                <div className="title-cont-search">
                    <FontAwesomeIcon onClick={() => selectFlight({}, false)} class="arrowLeftIcon" icon={faArrowLeft} />
                    <div className="search-title">{`Select destination departing from ${selected.location.cityName}`}</div>
                </div>}


            <div className="cards-cont">
                {isOrigin
                    ? routes.routes.map(r =>
                        <div className="card-link" onClick={() => { selectFlight(r, true) }}>
                            <SearchCard location={r} available={true} />
                        </div>
                    )
                    : selected.destinations.map(r =>
                        r.availability ?
                            <Link className="card-link" to={{ pathname: `/flights/${selected.code}-${r.code}`, state: { origin: selected.description, destination: r.description } }}  >
                                <SearchCard location={r} available={true} />
                            </Link> :
                            <div className="unavailable-card">
                                <SearchCard location={r} available={false} />
                            </div>)}
            </div>

        </div>
    );
}
