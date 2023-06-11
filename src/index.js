import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends Component {
  render() {
    return (
      <main>
        <section className="top">
          <div className="container">
            <h1>Join our community</h1>
            <h2>30-day, hassle-free money back guarantee</h2>
            <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
          </div>
        </section>
        <section className="bottom">
          <div className="subscription">
            <div className="container">
              <h2>Monthly Subscription</h2>
              <div className="monthly">
                  <h3 className="price">$29</h3>
                  <p className="rate">per month</p>
              </div>
              <p>Full access for less than $1 a day</p>
              <button>Sign Up</button>
            </div>
          </div>

          <div className="why-us">
            <div className="container">
              <h2>Why Us</h2>
              <ul>
                <li>Tutorials by industry experts</li>
                <li>Peer & expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
