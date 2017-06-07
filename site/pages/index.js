import React, {
  Component,
} from 'react';

export default class App extends Component {

  state = {
    title: 'Your site',
  }

  render() {
    return (
      <div>Welcome to {this.state.title}!</div>
    );
  }

}
