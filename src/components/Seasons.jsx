import React from 'react';
import Items from './Items';
import PropTypes from "prop-types";

var masterItemList= [
    {
        name : 'Corn',
        price: "$0.25",
        imgurl : 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/corn-1296x728-feature.jpg?w=1155&h=1528' 
      },
      {
        name : 'Apple',
        price: "$0.45",
        imgurl : 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/corn-1296x728-feature.jpg?w=1155&h=1528' 
      }

];

function Season(){
    return (
        <div>
            {masterItemList.map((item, index) =>
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
    imgurl: PropTypes.string,
    items: PropTypes.array
}


export default Season;