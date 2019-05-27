import React from 'react';
import './Dashboard.scss'

function Dashboard(props){  
    let {countries} = props; 
    return (
        <div className="country-dashboard-wrapper">
            {
                countries.map((country, index)=>{
                    return (
                        <div className="country-dashboard" key={index}>
                            <div className="name"> {country.name} </div>
                            <div className="capital"> {country.capital} </div>
                        </div>
                    )
                })
            }
        </div>
    );
    }

export default Dashboard;