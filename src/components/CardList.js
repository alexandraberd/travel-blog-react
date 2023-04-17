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
                        
                    />
                );
            })}
        </div>
    );
}

export default CardList;
