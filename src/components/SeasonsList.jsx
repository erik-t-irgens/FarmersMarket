import React from 'react';
import Seasons from './Seasons';

var masterSeasonsList = [

];

function SeasonsList() {
    return (
        <div>
            {masterSeasonsList.map((season, index) =>
                <Seasons name={season.name}
                imgurl={season.imgurl}
                items={season.items}
                key={index}/>
                
            )}
        </div>
    );
}

export default SeasonsList;