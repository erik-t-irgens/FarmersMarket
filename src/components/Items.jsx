import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  var getStyle = () => {
    return  {
            
      width : '100'
            
    };
  };
  return (
    <div>
      <img style = {getStyle()} src={props.imgurl} alt = {`img of ${props.name}`}/>
      <h6>{props.name}</h6>
      <p>{props.price}</p>
    </div>
  );
}

Item.PropTypes= {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgurl: PropTypes.string
};

export default Item;