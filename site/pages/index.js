import React, { Component } from 'react';

export default class App extends Component {
  state = {
    title: 'Your Product',
  };

  render() {
    return (
      <div className="site">

        <style jsx>{`
          .header {
            text-align: center;
          }
        `}</style>

        <div className="container">

          <h1>Website Now!</h1>

          <p>
            The easiest way to get a website started today. Using
            the latest technologies.
          </p>

          <h2>GUI (MacOS only)</h2>

          <a className="btn btn-primary" onClick={() => alert('BOOM!')}>
            Get it
          </a>

          <br />
          <br />

          <h2>CLI</h2>

          <code>
            npm install -g website-now && website-now
          </code>

        </div>

      </div>
    );
  }
}
