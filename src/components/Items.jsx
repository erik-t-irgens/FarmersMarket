import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  var imgStyle = () => {
    return  {
      height: '100',
      width : 'auto'
    };
  };

  var itemStyle = () => {
    return  {
            
      border : "5px solid lightgray",
      color : "black",
      width : "200px",
      backgroundColor : "darkgray",
      display : "inline-block",
      height: "200px",
      marginLeft : "5px",
      alignItems: "center",
      alignSelf: "center"
    };
  };

  
  return (
    <div style = {itemStyle()}>
      <img style = {imgStyle()} src={props.imgurl} alt = {`img of ${props.name}`}/>
      <p>{props.name}</p>
      <p>${props.price}</p>
    </div>
  );
}

Item.PropTypes= {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgurl: PropTypes.string
};

export default Item;