import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard'
import SortPanel from './SortPanel/SortPanel'
import * as services from '../Services/services'


class Container extends Component {
    constructor(props){
        super(props)
        this.state={
            countries: [],
            label: 'country'
        }
    }
    componentDidMount(){
        services.getAllCountry(0, 20).then((res)=>{
            this.setState({
                ...this.state,
                countries: services.sortBy(res,this.state.label)
            })
        })
    }
    onSortClick = (label) =>{
        this.setState({
            ...this.state,
            countries: services.sortBy(this.state.countries, label),
            label
        })
        
       
    }
    render() {
        const {label,countries} = this.state
        return (
            <div>
                <SortPanel label={label} onSortClick={this.onSortClick} />
                <Dashboard countries={countries}/>
            </div>
        );
    }
}

export default Container;