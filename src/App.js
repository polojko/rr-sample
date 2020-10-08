import React, { useState, useEffect } from 'react'
import './App.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader, NoData, Footer, Error, ScrollToTop } from './components/Helpers';
import SearchBar from "material-ui-search-bar";

function App(props) {

  const { cards, page, pageSize } = props;
  const [searchTerm, setSearchTerm] = useState('');
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
          console.log('json: ', json);
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
    props.dispatch({
      type: 'DO_SEARCH',
      payload: input
    })
    loadCards(input, 'search')
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
    console.log('scroll called!!');
    if (window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    loadCards();
    window.addEventListener('scroll', _.debounce(showScrollToTop,500));
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <header className="App-header">
        <img src='/logo.png' className='App-logo' alt='Elder Scrolls Legends' />
      </header>
      <div className='search'>
        <SearchBar
          value={searchTerm}
          onChange={(newValue) => setSearchTerm(newValue)}
          onRequestSearch={() => doSearch(searchTerm, 'search')}
          onCancelSearch={() => doSearch(setSearchTerm(''), 'search')} // clears cards, and refetches them
        />
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
          {cards.map((card, index) => (
            <div key={card.id} className='card'>
              <img src={card.imageUrl} alt={card.name} />
              <div className='card-name'>{card.name}</div>
              <div className='card-text'>{card.text}</div>
              <div className='other-fields'>
                {card.set.name && <span><b>Set:</b> {card.set.name} </span>}
                {card.type && <span><b>Type:</b> {card.type}</span>}
              </div>
            </div>
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