import React from 'react';
import Items from './Items';
import PropTypes from 'prop-types';


function Season(props){
  return (
    <div>
      <h3>{props.name}</h3>
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