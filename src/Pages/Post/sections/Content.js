import React from 'react';

function Content(props) {
    return (
        <div className='content'>
          <img src={props.image} className='img1' />
        </div>
    );
}

export default Content;