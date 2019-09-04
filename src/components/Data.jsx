import React from 'react';

var Items = {
  apple : {
    name : 'Apple',
    price : '0.45',
    imgurl : 'null'
  },
  tomato : {
    name : 'Tomato',
    price : '0.80',
    imgurl : 'null'
  },
  banana : {
    name : 'Banana',
    price : '0.25',
    imgurl : 'null'
  },
  squash : {
    name : 'Squash',
    price : '1.00',
    imgurl : 'null'
  },
  peach : {
    name : 'Peach',
    price : '0.75',
    imgurl : 'null'
  },
  orange : {
    name : 'Orange',
    price : '0.25',
    imgurl : 'null'
  },
  pumpkin : {
    name : 'Pumpkin',
    price : '1.00/lb',
    imgurl : 'null'
  },
  cranberries : {
    name : 'Cranberries',
    price : '0.25/lb',
    imgurl : 'null'
  },
  strawberries : {
    name : 'Strawberries',
    price : '1.50',
    imgurl : 'null'
  },
  flowers : {
    name : 'Flowers',
    price : '10.00',
    imgurl : 'null'
  }
    
};

function GetSeasonData()
{ 
    return SeasonData = {
    spring : {
        name: 'Spring',
        items: [Items.flowers, Items.tomato, Items.strawberries, Items.peach, Items.banana]
    },
    summer : {
        name: 'Summer',
        items: [Items.tomato, Items.banana, Items.strawberries, Items.orange]
    },
    fall : {
        name: 'Fall',
        items: [Items.squash, Items.pumpkin, Items.apple,  Items.banana]
    },
    winter : {
        name: 'Winter',
        items: [ Items.banana, Items.cranberries, Items.pumpkin]
    }

    };
}

function GetSeasonDataArr()
{ 
    return [
    {
        name: 'Spring',
        items: [Items.flowers, Items.tomato, Items.strawberries, Items.peach, Items.banana]
    },
    {
        name: 'Summer',
        items: [Items.tomato, Items.banana, Items.strawberries, Items.orange]
    },
    {
        name: 'Fall',
        items: [Items.squash, Items.pumpkin, Items.apple,  Items.banana]
    },
    {
        name: 'Winter',
        items: [ Items.banana, Items.cranberries, Items.pumpkin]
    }
]
}

// export default GetSeasonData;
export default GetSeasonDataArr;