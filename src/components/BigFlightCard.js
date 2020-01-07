import React, { useState } from 'react';

import './flights-card.css'
import moment from 'moment'

export default function BigFlightCard(props) {


    let formatDateDiff = (date1, date2) => {
        let arrival = new Date(date1).getTime()
        let departure = new Date(date2).getTime()
        let diff = arrival - departure
        var hours = Math.floor(diff / 3.6e5)
        var minutes = Math.floor((diff % 3.6e5) / 6e4)
        return `Flight duration: ${hours}Hs ${minutes} Minutes`
    }
    return (

        <div className="flight-card big">
            <div className="flight-card-inner">
                <div>
                    <span className="big-text-big">{moment(props.flight.departureDate).format('LT')}</span>
                    <span className="big-text-small">{props.flight.destination}</span>
                </div>
                <div className="right-text">
                    <span className="big-text-big"> {moment(props.flight.arrivalDate).format('LT')}</span>
                    <span className="big-text-small"> {props.flight.origin}</span>
                </div>
            </div>
            <div className="big-card-inner">
                <div className="description">
                    <span className="description-text">Origin: {props.description.origin}</span>
                    <span className="description-text">Destination: {props.description.destination}</span>

                </div>
                <span>{formatDateDiff(props.flight.arrivalDate, props.flight.departureDate)}</span>
                {'Flight No: '}{props.flight.flightNo}
                <div className="fare">
                {"ARS$"} {props.flight.fares[0].prices.afterTax}
                </div>
            </div>

        </div>

    );
}
