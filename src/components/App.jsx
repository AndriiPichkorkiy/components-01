import { Component } from 'react';

class App extends Component {
  state = {
    isLogedIn: false,
  };

  isLogedInToggle = event => {
    event.preventDefault();
    // this.setState(preState => ({
    //   isLogedIn: !preState.isLogedIn,
    // }))

    this.setState(preState => {
      console.log(event);
      return {
        isLogedIn: !preState.isLogedIn,
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.isLogedInToggle}>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="name" placeholder="write in name" />

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
