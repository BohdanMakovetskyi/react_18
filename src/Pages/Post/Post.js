import React from 'react';
import Footer from './sections/Footer';
import Content from './sections/Content';
import Header from './sections/Header';

import './Post.css';

function Post(props) {
  return (
    <div className='box1'>
      <Header info = {props} />
      <Content image = {props.image} />
      <Footer />
    </div>
  );
}

export default Post;