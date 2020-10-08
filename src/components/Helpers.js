/** Helper components */

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Footer = () => {
    return (
        <div className='footer'>© { new Date().getFullYear()} The Elder Scrolls Legends™. All rights reserved</div>
    );
}

const Loader = () => {
    return (
        <div className='loader'>
            <CircularProgress color='inherit' />
            <div>Loading...</div>
        </div>
    );
}

const Error = () => {
    return (
        <div className='loader'>Error occured while fetching data.</div>
    );
}

const NoData = () => {
    return (
        <div className='loader'>No more data is available.</div>
    );
}

const ScrollToTop = () => {
    return (
        <div className='scroll-to-top' title='Scroll to top'>
            <ArrowUpwardIcon onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </div>
    )
}

export { Footer, Loader, Error, NoData, ScrollToTop };