import React, { Component } from 'react';

class SelectDropDown extends Component {

    render() {
        return (
            <div className="dropdown">
                <div className="form-group">
                    <label htmlFor={this.props.details.name}>{this.props.details.heading}:</label>
                    <select className="form-control" id={this.props.details.name} onClick={(e) => this.props.details.onChange(e)}>
                    {this.props.details.areas.map((area,i)=>{
                        return(
                            <option key={i} >{area}</option>    
                        )
                    })}
                        
                    </select>
                </div>
            </div>
        )
    }
}

export default SelectDropDown;