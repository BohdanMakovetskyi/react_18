import React, { Component } from 'react';

import '../cssForSections/Contact.css';

class Contact extends Component {
    state = {
        isOpen: false,
        gender: this.props.user.gender
    }

    clickContact = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        let genderIconClass = {
            male : "fas fa-mars",
            female : "fas fa-venus"
        };
        return (
            <div onClick={this.clickContact} className='contact'>
                <div className="contact__item">
                    <h3>{this.props.user.lastName}</h3>
                    <i className={genderIconClass[this.state.gender] + ' ' + 'img'}/>
                </div>
                {
                    this.state.isOpen ? (
                        <div className='info'>
                            <p>
                                Ім'я: {this.props.user.firstName}
                            </p>
                            <p>
                                номер: {this.props.user.phone}
                            </p>
                            <p>
                                стать: {this.props.user.gender}
                            </p>
                        </div>
                    ) : ''
                }
            </div>
        );
    }
}

export default Contact;