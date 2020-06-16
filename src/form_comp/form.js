import React, { Component } from 'react';
import Field from './Field';
// import DropDown from './DropDown';

// import { DropdownButton,Dropdown,ButtonGroup } from 'react-bootstrap';

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name*', maxLimit:'20' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*',maxLimit:'20' },
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your message*',maxLimit:'150' },
            { name: 'gender', tag:'Gender', type: 'radio', options: ['male', 'female'] },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*',maxLimit:'11' },
            { name: 'country', heading: 'Select Country', type: 'dropdown', areas: ['Pak', 'china', 'uk'] }
        ],
        // [
        //     { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your message*' },
        //     { name: 'gender', type: 'radio', options: ['male', 'female', 'shemale'] },
        // ],
        // [
        //     { name: 'area', heading: 'Select Area', type: 'dropdown', areas: ['bfrzne', 'nagan', 'nrthnzmbd'] },
        // ]
    ],
}

class Contactpage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            gender: '',
            country: 'Pak',
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <br />
                    <br />
                </div>
                <form noValidate="novalidate"
                    onSubmit={(e) => this.submitForm(e)}
                >
                    <div className="row">
                        {fields.sections.map((section, sectionIndex) => {
                            return (
                                <div className="col-md-12" key={section}>
                                    {section.map((field, i) => {
                                        return (
                                            <Field
                                                {...field}
                                                key={i}
                                                value={this.state[field.name]}
                                                onChange={(e) => this.setState({
                                                    [field.name]: e.target.value
                                                })}
                                            />
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-center">
                        <button
                            className="btn btn-primary btn-block text-uppercase"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contactpage;