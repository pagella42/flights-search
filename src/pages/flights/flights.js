import React, { useState } from 'react';
import epacor from '../../epa-cor.json';
import epamdz from '../../epa-mdz.json';
import './flights.css'
import SmallFlightCard from '../../components/SmallFlightCard.js';
import BigFlightCard from '../../components/BigFlightCard.js';
import { withRouter } from "react-router";

function Flights(props) {

    const [routes, setRoutes] = useState({ "EPA-COR": epacor, "EPA-MDZ": epamdz });
    const [selected, setSelected] = useState("");
    

    return (

        <div className="flights-big-cont">
            {routes[props.match.params.flight].flights.map(f => {
                return (
                    selected === f.flightNo ? <BigFlightCard description={props.location.state} flight={f}/> :<SmallFlightCard  setSelected={setSelected} flight={f}/>
                )
            })}


        </div>
    );
}
export default withRouter(Flights);