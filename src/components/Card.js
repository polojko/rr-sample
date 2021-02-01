import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            }
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
        // backgroundColor: '#ecd797'
    },
    track: {
        borderRadius: 26 / 2,
        // border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: '#9c8f6a',
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            value=''
            {...props}
        />
    );
});

const Card = ({ card, selected }) => {
    const [checked] = useState(selected);

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
                <FormControlLabel
                    label="Select card:"
                    labelPlacement="start"
                    control={<IOSSwitch
                        size='small'
                        defaultChecked={checked}
                        onChange={(e) => localStorage.setItem(card.id, e.target.checked)}
                        name={card.id} />}
                />
            </div>
        </div>
    )
};

export default Card;