import React, { useState, useEffect } from 'react'
import './App.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import Constants from './Constants';
import { Loader, NoData, Footer, Error, ScrollToTop, SearchMessage } from './components/Helpers';
import Card from './components/Card';
import SearchBar from 'material-ui-search-bar';

function App(props) {

  const { cards, page, pageSize } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [error, setError] = useState('');

  const loadCards = (name, type) => {
    setIsLoading(true); // resets isLoading back to true
    let searchTerm = name ? name : '';
    let pageCount = (type && type === 'search') ? 1 : page;
    setTimeout(() => {
      fetch('https://api.elderscrollslegends.io/v1/cards?name=' + searchTerm + '&pageSize=' + pageSize + '&page=' + pageCount) // useSwr to cache this - yugo-music
        .then(response => response.json())
        .then(json => {
          setIsLoading(false);
          props.dispatch({
            type: 'LOAD_CARDS',
            payload: json.cards
          })
        })
        .catch(function (error) {
          setError(error);
          console.log(error);
        });
    }, 2000) // timeout to see loader
  }

  const doSearch = (input) => {
    validateSearchInput(input)
    if (input?.length < 4) {
      return;
    }
    props.dispatch({
      type: 'DO_SEARCH',
      payload: input
    })
    loadCards(input, 'search')
  }

  const cancelSearch = () => {
    setSearchTerm('')
    props.dispatch({
      type: 'DO_SEARCH',
      payload: ''
    })
    loadCards('', 'search')
  }

  const loadingMessage = (isLoading, error) => {
    if (error) {
      return <Error />
    } else if (isLoading) {
      return <Loader />
    } else {
      return <NoData />
    }
  }

  const showScrollToTop = () => {
    if (window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const validateSearchInput = (input) => {
    if (input?.length < 4) {
      setSearchMessage(Constants.SEARCH_MESSAGE_TEXT);
    } else {
      setSearchMessage('');
      setSearchTerm(input);
    }
  }

  useEffect(() => {
    loadCards();
    window.addEventListener('scroll', _.debounce(showScrollToTop,500));
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='App'>
      <header className='App-header'>
        <img src='/logo.png' className='App-logo' alt='Elder Scrolls Legends' />
      </header>
      <div className='search'>
        <SearchBar
          value={searchTerm}
          onChange={(newValue) => validateSearchInput(newValue)}
          onRequestSearch={() => doSearch(searchTerm, 'search')}
          onCancelSearch={() => cancelSearch()} // clears cards, and refetches them
        />
        {<SearchMessage message={searchMessage}/>}
      </div>
      <div className='cards-container'>
        <InfiniteScroll
          dataLength={cards.length}
          next={() => loadCards(searchTerm)}
          hasMore={true}
          loader={loadingMessage(isLoading, error)}
          className='cards'
          scrollThreshold='100px'
        >
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </InfiniteScroll>
      </div>
      {showScroll && <ScrollToTop />}
      <Footer />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    page: state.page,
    pageSize: state.pageSize,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)