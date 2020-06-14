import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Field extends Component {

    render() {
        return (
            <div>
                {this.props.elementName === "input" ?
                    <input
                        className="form-control"
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
                                this.props.options.map((optn, i) => {
                                    return (
                                        <FormGroup  key={i}>
                                            <Label >
                                                <Input
                                                    type={this.props.type}
                                                    name={this.props.name}
                                                    value={optn}
                                                    onClick={(e) => this.props.onChange(e)
                                                    }
                                                />{'  '+ optn}
                                            </Label>
                                        </FormGroup>
                                    )})
                            
                            :
                            null
                }
                <br/>
                <br/>
            </div>
        )
    }
}

export default Field;