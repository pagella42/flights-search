import React, { useState } from 'react';

import './flights-card.css'
import moment from 'moment'

export default function SmallFlightCard(props) {

    return (
                        <div className="flight-card small" onClick={() => { props.setSelected(props.flight.flightNo) }}>
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

                        </div>
    );
}
