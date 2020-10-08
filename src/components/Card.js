import React from 'react';

const Card = ({card}) => {
    return (
        <div key={card.id} className='card'>
            <img src={card.imageUrl} alt={card.name} />
            <div className='card-name'>{card.name}</div>
            <div className='card-text'>{card.text}</div>
            <div className='other-fields'>
                {card.set.name && <span><b>Set:</b> {card.set.name} </span>}
                {card.type && <span><b>Type:</b> {card.type}</span>}
            </div>
        </div>
    )
};

export default Card;