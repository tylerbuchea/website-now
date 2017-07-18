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

          <div className="">

            <h1>Announcing {this.state.title}!</h1>

            <button className="btn btn-primary" onClick={() => alert('BOOM!')}>
              Call to Action
            </button>

          </div>

        </div>

      </div>
    );
  }
}
