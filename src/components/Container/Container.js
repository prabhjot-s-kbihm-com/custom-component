import React from 'react';

const MyContainer = (props) => {

  return (<div style={{width: 1000, margin: '0 auto'}}>
      {props.children}
  </div>)
}

export default MyContainer;