import React, { Component } from 'react';

import Head from 'next/head';

export default class App extends Component {
  state = {
    title: 'Your site',
  };

  style = () =>
    <style jsx>{`
      .header {
        text-align: center;
      }
    `}</style>;

  render() {
    return (
      <div className="site">

        {this.style()}

        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Website Now!</title>
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
            integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w"
            crossorigin="anonymous"
          />
        </Head>

        <div className="container">

          <div className="header pure-u-1">
            <h1>Welcome to {this.state.title}!</h1>
            <button className="button-xlarge pure-button-primary">
              Extra Large Button
            </button>
          </div>

          <div className="pure-g">
            <div className="pure-u-1-3"><p>Thirds</p></div>
            <div className="pure-u-1-3"><p>Thirds</p></div>
            <div className="pure-u-1-3"><p>Thirds</p></div>
          </div>

        </div>

      </div>
    );
  }
}
