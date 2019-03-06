import React, { Component } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


class QuoteMachine extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuote: 'this is the current quote',
      currentAuthor: 'Foo Bar',
      allQuotes: [],
    }
    this.fetchQuotes = this.fetchQuotes.bind(this);
    this.setNewQuote = this.setNewQuote.bind(this);

  }


  setNewQuote = () => {
    let newQuoteIndex = Math.floor(Math.random()*this.state.allQuotes.quotes.length);
    let newQuote = this.state.allQuotes.quotes[newQuoteIndex];
    this.setState({
      currentQuote: newQuote.quote,
      currentAuthor: newQuote.author
    });
  }

  componentWillMount = () => {
    this.fetchQuotes();
  }

  fetchQuotes = () => {
    if (this.state.allQuotes.length === 0) {
      const that = this;

      fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(response => response.json())
        .then(function(data) {
          that.setState({
            allQuotes: data,
          });
          that.setNewQuote();
        })
        .catch(error => console.log(error));
    }

  }

  render() {
    return (
      <div id="quote-box">
        <h3 id="text">"{this.state.currentQuote}"</h3>
        <h5 id="author">- {this.state.currentAuthor}</h5>
        <div className="button-box">
           <a id="tweet-quote" target="_blank" rel="noopener noreferrer" href={"https://twitter.com/intent/tweet?text="+'"'+this.state.currentQuote +'"'+ " -- " + this.state.currentAuthor}><button id="tweet-button"><FontAwesomeIcon icon={faTwitter} /> Tweet</button></a>
          <button onClick={this.setNewQuote} id="new-quote">New quote ></button>
        </div>

      </div>
    );

  }
}

export default QuoteMachine;
