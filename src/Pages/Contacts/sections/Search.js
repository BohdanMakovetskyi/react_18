import React, { Component } from 'react';
import Contact from './Contact';
import CheckBox from './CheckBox';

import '../cssForSections/Search.css';
import '../Contacts.css';

class Seacrh extends Component {
    state = {
        value: '',
        contacts: this.props.contacts,
        male: true,
        female: true,
        unknow: true
    }

    changeValueInput = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    checkedArray = () => {
        let male, female, unknow = [];
        if(this.state.male === true){
            male = this.state.contacts.filter(element => element.gender === 'male')
        } else {
            male = [];
        }
        if(this.state.female === true){
            female = this.state.contacts.filter(element =>  element.gender === 'female')
        } else {
            female = [];
        }
        if(this.state.unknow === true){
            unknow = this.state.contacts.filter(element => element.lastName === 'Анонимус');
        } else {
            unknow = [];
        }
        let temp = [male, female, unknow].flat();
        return temp;
    }

    searchWithCheckBox = () => {
        if (this.state.value === 'он') {
            return this.checkedArray().filter(element => element.gender === 'male')
        } else if (this.state.value === 'она') {
            return this.checkedArray().filter(element => element.gender === 'female')
        } else {
            return this.checkedArray().filter(element =>
                element.lastName.toLowerCase().includes(this.state.value) === true ||
                element.firstName.toLowerCase().includes(this.state.value) === true ||
                element.phone.includes(this.state.value) === true
            )
        }
    }

    updateStateMale = () => {
        this.setState({
            male: !this.state.male
        })
    }
    updateStateFemale = () => {
        this.setState({
            female: !this.state.female
        })
    }
    updateStateUnknow = () => {
        this.setState({
            unknow: !this.state.unknow
        })
    }

    render() {
        return (
            <div className="input">
                <input className='input__item' placeholder='пошук' onChange={this.changeValueInput} value={this.state.value} />
                <CheckBox updateStateMale = {this.updateStateMale} updateStateUnknow = {this.updateStateUnknow} updateStateFemale = {this.updateStateFemale}/>
                <div className="contacts">
                    {
                        this.searchWithCheckBox().map(element => {
                            return <Contact key={element.lastName} user={element} />;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Seacrh;