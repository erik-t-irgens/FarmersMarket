  
import React from 'react';
import Items from './Items';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Season(props){
    var titleStyle = () => {
      return {
        fontSize : "30px",
      }    
    }
    var divStyle = () => {
      return {
        textAlign: "center",
        fontSize: "20"
      }
    }
  return (
    <div style= {divStyle()}>
      <Link style = {titleStyle()} to={`/${props.name}`}>{props.name}</Link><br></br> 
      {props.items.map((item, index) =>
        <Items name={item.name}
          price={item.price}
          imgurl={item.imgurl}
          key={index}/>
                
      )}
    </div>
  );
}

Season.PropTypes= {
  name: PropTypes.string.isRequired,
  // imgurl: PropTypes.string,
  items: PropTypes.array
};


export default Season;