import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ProgressiveImage from 'react-progressive-image';
import { Loader } from './Helpers';

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
    },
    track: {
        borderRadius: 26 / 2,
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
            <ProgressiveImage src={card.imageUrl} placeholder="/loader-img.png">
            {(src, loading) => (
                <>
                    {loading && <Loader/>}
                    <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={card.name} />
                </>
              )}
            </ProgressiveImage>
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