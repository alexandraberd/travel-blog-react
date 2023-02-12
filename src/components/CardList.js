import React from 'react';
import Card from './Card';
import data from '../assets/data.js';

function CardList() {
    return (
        <div className="card-list">
            {data.map((item) => {
                return (
                    <Card
                        key={item.id.toString()}
                        item={item}
                        // title={item.title}
                        // location={item.location}
                        // googleMapsUrl={item.googleMapsUrl}
                        // startDate={item.startDate}
                        // endDate={item.endDate}
                        // description={item.description}
                        // imageLarge={item.imageLarge}
                        // imageSmall={item.imageSmall}
                    />
                );
            })}
        </div>
    );
}

export default CardList;
