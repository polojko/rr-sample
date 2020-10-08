import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Loader, NoData, Footer, Error, ScrollToTop, SearchMessage } from './Helpers';

afterEach(cleanup);

it('Footer component renders correctly', () => {
    const footer = renderer
        .create(<Footer />)
        .toJSON();
    expect(footer).toMatchSnapshot();
});

it('Footer contains text', () => {
    render(<Footer />)
    expect(screen.getByText(/The Elder Scrolls Legends™/i)).toBeTruthy();
});

it('Loader component renders correctly', () => {
    const loader = renderer
        .create(<Loader />)
        .toJSON();
    expect(loader).toMatchSnapshot();
});

it('Loader contains text', () => {
    render(<Loader />)
    expect(screen.getByText(/Loading.../i)).toBeTruthy();
});

it('Error component renders correctly', () => {
    const error = renderer
        .create(<Error />)
        .toJSON();
    expect(error).toMatchSnapshot();
});

it('Error contains text', () => {
    render(<Error />)
    expect(screen.getByText(/Error occured while fetching data./i)).toBeTruthy();
});

it('NoData component renders correctly', () => {
    const error = renderer
        .create(<NoData />)
        .toJSON();
    expect(error).toMatchSnapshot();
});

it('NoData contains text', () => {
    render(<NoData />)
    expect(screen.getByText(/No more data is available./i)).toBeTruthy();
});

it('ScrollToTop component renders correctly', () => {
    const scrollToTop = renderer
        .create(<ScrollToTop />)
        .toJSON();
    expect(scrollToTop).toMatchSnapshot();
});

it('SearchMessage component renders correctly', () => {
    const messageData = 'test testing';
    const message = renderer
        .create(<SearchMessage message={messageData} />)
        .toJSON();
    expect(message).toMatchSnapshot();
});

it('NoData contains text', () => {
    const messageData = 'test testing';
    render(<SearchMessage  message={messageData} />)
    expect(screen.getByText(/test testing/i)).toBeTruthy();
});
