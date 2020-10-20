import React from 'react';

const Card = ({ card }) => {

    const getLocalStorageItem = (id) => {
        let parseToBool = JSON.parse(localStorage.getItem(id))
        if (parseToBool) {
            return parseToBool
        }
    }

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
                    defaultChecked={getLocalStorageItem(card.id)}
                    onChange={(e) => localStorage.setItem(card.id, e.target.checked)}
                />
            </div>
        </div>
    )
};

export default Card;