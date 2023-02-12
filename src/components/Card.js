import React from 'react';
import locationIcon from '../assets/location.svg';

function Card(props) {
    return (
        <div className="item">
            <picture>
                <source media="(max-width: 899px)" srcSet={`assets/images/${props.item.imageSmall}`} />
                <source media="(min-width: 900px)" srcSet={`assets/images/${props.item.imageLarge}`} />
                <img src={`assets/images/${props.item.imageSmall}`} alt="" className="item__img" />
            </picture>
            <div className="item__wrap">
                <div className="location__wrapper">
                    <img alt="" src={locationIcon} className="item__icon"></img>
                    <p className="item__location">
                        {props.item.location}
                        <a className="item__link" href={`${props.item.googleMapsUrl}`}>
                            View on Google Maps
                        </a>
                    </p>
                </div>
                <h2 className="item__header">{props.item.title}</h2>
                <p className="item__date">
                    {props.item.startDate} - {props.item.endDate}
                </p>
                <p className="item__description">{props.item.description}</p>
            </div>
        </div>
    );
}

export default Card;
