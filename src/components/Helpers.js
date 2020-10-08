/** Helper components */

import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../Constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Footer = () => {
    return (
        <div className='footer'>© { new Date().getFullYear()}{Constants.FOOTER_TEXT}</div>
    );
}

const Loader = () => {
    return (
        <div className='loader'>
            <CircularProgress color='inherit' />
            <p>{Constants.LOADING_TEXT}</p>
        </div>
    );
}

const Error = () => {
    return (
        <div className='loader'>{Constants.ERROR_TEXT}</div>
    );
}

const NoData = () => {
    return (
        <div className='loader'>{Constants.NO_DATA_TEXT}</div>
    );
}

const ScrollToTop = () => {
    return (
        <div className='scroll-to-top' title='Scroll to top'>
            <ArrowUpwardIcon onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </div>
    )
}

const SearchMessage = ({message}) => {
    return (
        <div className='search-message'>
            {message}
        </div>
    )
}

SearchMessage.propTypes = {
    content: PropTypes.string
};

export { Footer, Loader, Error, NoData, ScrollToTop, SearchMessage };