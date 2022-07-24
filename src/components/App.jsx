import { Component, Fragment } from 'react';
import Gallery from './Gallery/Gallery';

class App extends Component {
  state = {
    isLogedIn: false,
  };

  hendelLogin = event => {
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

  // logaut = (event) => {
  //   event.preventDefault();

  // };

  logaut (){
    const {isLogedIn} = this.state;
    this.setState({isLogedIn: false});
  };

  

  render() {
    const{hendelLogin, logaut} = this;
    const {isLogedIn} = this.state; 
    return (
      <Fragment>
        {isLogedIn ? <Gallery
        logaut={logaut.bind(this)}/> : 
        <form onSubmit={hendelLogin}>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" placeholder="write in name" />

          <label>
            Password:
            <input type="password" name="password" />
          </label>

          <input type="submit" value="Submit" />
        </form>}
        
      </Fragment>
    );
  }
}

export default App;
