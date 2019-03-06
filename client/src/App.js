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
      backgroundColor: 'fff',
    }
    this.fetchQuote = this.fetchQuote.bind(this);
    this.getColor = this.getColor.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  getColor = () => {
    return {
        backgroundColor: this.state.backgroundColor
    }
  }

  changeColor = () => {
    let colors = ["#e5efff", "#ffe5e5", "#ffede5", "#fff3e5", "#fffde5", "#f6ffe5", "#ecffe5", "#e5ffec", "#e5fff8", "#e5fcff", "#e5ebff", "#ede5ff", "#f6e5ff", "#ffe5fc", "#ffe5f1"];
    let newColor = colors[Math.floor(Math.random()*colors.length)];

    this.setState({
        backgroundColor: newColor
    });
  }

  componentWillMount = () => {
    this.fetchQuote();
    this.changeColor();
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
      this.changeColor();
  }

  render() {
    return (
      <div id="container" style={this.getColor()}>
          <div id="quote-box">
            <h3 id="text">{this.state.currentQuote}</h3>
            <h5 id="author">- {this.state.currentAuthor}</h5>
            <div className="button-box">
               <a id="tweet-quote" target="_blank" rel="noopener noreferrer" href={"https://twitter.com/intent/tweet?text="+'"'+this.state.currentQuote+'" -- '+this.state.currentAuthor + "&hashtags=randomlygeneratedinspiration"}><button id="tweet-button"><FontAwesomeIcon icon={faTwitter} /> Tweet</button></a>
              <button onClick={this.fetchQuote} id="new-quote">New quote ></button>
            </div>
          </div>
          <h6 id="footer">markov chain implementation by <a target="_blank" rel="noopener noreferrer" href="https://github.com/jsvine/markovify">jsvine</a> / original quote input from <a target="_blank" href="http://wisdomquotes.com/inspirational-quotes" rel="noopener noreferrer">wisdomquotes </a></h6>
      </div>
    );

  }
}

export default QuoteMachine;
