import React, { Component } from 'react';
import Seacrh from './sections/Search';

class Contacts extends Component {
  state = {
    contacts: [{
      firstName: "Барней",
      lastName: "Стинсовский",
      phone: "+380956319521",
      gender: "male"
    }, {
      firstName: "Робин",
      lastName: "Щербатская",
      phone: "+380931460123",
      gender: "female"
    }, {
      firstName: "Аномный",
      lastName: "Анонимус",
      phone: "+380666666666",
      gender: ""
    }, {
      firstName: "Лилия",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female"
    }, {
      firstName: "Маршэн",
      lastName: "Эриксонян",
      phone: "+380739432123",
      gender: "male"
    }, {
      firstName: "Теодор",
      lastName: "Мотсбэс",
      phone: "+380956319521",
      gender: "male"
    }]
  }

  render() {
    return (
      <div className='box'>
        <h2 className='title'>Контакти:</h2>
        <Seacrh contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Contacts;
