import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'
import SearchCard from '../components/SearchCard';
import routes from '../routes.json';

export default function Index() {
    return (
        <div>
            <div className="search-title">
                <span >Welcome to your go to Airline</span>
            </div>
            <Link className="search-link" to="/search" >
                <span className="destinations">• See all Destinations</span>

            </Link>
            <div >
                <span className="search-link-un ">• Check current Promotions</span>
                <span className="search-link-un">• Call us all to get help</span>
                <span className="search-link-un ">• Rent a car with us</span>
            </div>

            <div className="line-cont">
            <div className="line"></div>
            </div>
            <div className="search-title">
                <span className="featured">Featured Airpots</span>
                <Link className="featured-link" to="/search">
                <SearchCard location={routes.routes[2]} available={true}/>
                </Link>

            </div>
        </div>


    );
}
