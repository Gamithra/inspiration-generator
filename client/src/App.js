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
    }
    this.fetchQuote = this.fetchQuote.bind(this);


  }

  componentWillMount = () => {
    this.fetchQuote();
  }

  fetchQuote = () => {
      const that = this;

      fetch('https://gamithra.com/fake-quote/api', {
          dataType: 'json'
          })
          .then(response => response.json())
          .then(function(data) {
          that.setState({
             currentQuote: data.quote,
             currentAuthor: data.author
          });
        })
        .catch(error => console.log(error));

  }

  render() {
    return (
      <div id="container">
          <div id="quote-box">
            <h3 id="text">{this.state.currentQuote}</h3>
            <h5 id="author">- {this.state.currentAuthor}</h5>
            <div className="button-box">
               <a id="tweet-quote" target="_blank" rel="noopener noreferrer" href={"https://twitter.com/intent/tweet?text="+this.state.currentQuote}><button id="tweet-button"><FontAwesomeIcon icon={faTwitter} /> Tweet</button></a>
              <button onClick={this.fetchQuote} id="new-quote">New quote ></button>
            </div>
          </div>
          <h6 id="footer">markov chain implementation by <a target="_blank" rel="noopener noreferrer" href="https://github.com/jsvine/markovify">jsvine</a> / original quote input from <a target="_blank" href="http://wisdomquotes.com/inspirational-quotes" rel="noopener noreferrer">wisdomquotes </a></h6>
      </div>
    );

  }
}

export default QuoteMachine;
