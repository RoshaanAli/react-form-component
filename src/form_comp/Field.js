import React, { Component } from 'react';
import SelectDropDown from './SelectDropDown';


class Field extends Component {

    render() {
        return (
            <div>
                {this.props.elementName === "input" ?
                    <input
                        className="form-control"
                        maxLength={this.props.maxLimit}
                        pattern="[A-Za-z]{3}"
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        type={this.props.type}
                        required="required"
                        data-validation-required-message="Please enter your name."
                        value={this.props.value}
                        onChange={(e) => this.props.onChange(e)}
                    />
                    :
                    this.props.elementName === "textarea" ?
                        <textarea
                            className="form-control"
                            id={this.props.name}
                            placeholder={this.props.placeholder}
                            required="required"
                            data-validation-required-message="Please enter a message."
                            value={this.props.value}
                            onChange={(e) => this.props.onChange(e)}
                        />
                        :
                        this.props.type === "radio" ?
                            <div>
                                <p className="form-check-inline">{this.props.tag}:</p>
                                {this.props.options.map((optn, i) => {
                                    return (
                                        <div className="form-check-inline" key={i}>
                                            <label className="form-check-label" >
                                                <input
                                                    className="form-check-input"
                                                    type={this.props.type}
                                                    name={this.props.name}
                                                    value={optn}
                                                    onClick={(e) => this.props.onChange(e)}
                                                />{'  ' + optn}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            this.props.type === 'dropdown' ?

                                <SelectDropDown details={this.props} />

                                :
                                null
                }
                <br />
                <br />
            </div >
        )
    }
}

export default Field;