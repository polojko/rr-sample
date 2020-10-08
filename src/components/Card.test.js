import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

it('Card component renders correctly', () => {
    const cardData = {
        "name": "Raise Dead",
        "rarity": "Legendary",
        "type": "Action",
        "cost": 2,
        "set": {
            "id": "cs",
            "name": "Core Set",
            "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
        },
        "collectible": false,
        "text": "Summon a random creature from each discard pile.",
        "attributes": [
            "Endurance"
        ],
        "unique": false,
        "imageUrl": "https://images.elderscrollslegends.io/cs/raise_dead.png",
        "id": "ce7be2e72d6b06a52e50bed01952801ca4ecfade"
    }
    const card = renderer
        .create(<Card card={cardData} />)
        .toJSON();
    expect(card).toMatchSnapshot();
    expect(cardData).toMatchSnapshot({
        name: 'Raise Dead',
        type: 'Action',
        set: {
            name: 'Core Set'
        },
        text: 'Summon a random creature from each discard pile.',
        imageUrl: 'https://images.elderscrollslegends.io/cs/raise_dead.png'
    });
});