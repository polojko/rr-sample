import React from 'react';

const Card = ({ card, selected }) => {

    return (
        <div key={card.id} className='card'>
            <img src={card.imageUrl} alt={card.name} />
            <div className='card-name'>{card.name}</div>
            <div className='card-text'>{card.text}</div>
            <div className='other-fields'>
                {card.set.name && <span><b>Set:</b> {card.set.name} </span>}
                {card.type && <span><b>Type:</b> {card.type}</span>}
            </div>
            <div className='select-card'>
                <label htmlFor={card.id}>Select card:</label>
                <input
                    id={card.id}
                    type='checkbox'
                    defaultChecked={selected}
                    onChange={(e) => localStorage.setItem(card.id, e.target.checked)}
                />
            </div>
        </div>
    )
};

export default Card;