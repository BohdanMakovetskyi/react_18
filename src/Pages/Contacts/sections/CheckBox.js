import React, { Component } from 'react';

import '../cssForSections/CheckBox.css'

class CheckBox extends Component {
    
    render() {
        const {updateStateMale, updateStateFemale, updateStateUnknow} = this.props;
        return (
            <div className="checkbox">
                Male<input type="checkbox" 
                    defaultChecked 
                    onChange={updateStateMale}
                    />  
                Female<input type="checkbox"
                    defaultChecked  
                    onChange={updateStateFemale}
                    />
                Unknow<input type="checkbox"
                    defaultChecked  
                    onChange={updateStateUnknow}
                    />
            </div>
        );
    }
}

export default CheckBox;