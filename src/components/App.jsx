import { Component, Fragment } from 'react';
import Gallery from './Gallery/Gallery';
import { getImages } from 'services/pixabyApi';

class App extends Component {
  state = {
    isLogedIn: false,
    images: [],
  };

  handlerLogin = async event => {
    event.preventDefault();
    // this.setState(preState => ({
    //   isLogedIn: !preState.isLogedIn,
    // }))
    const { hits } = await getImages();

    this.setState(preState => {
      // console.log(event);
      return {
        isLogedIn: !preState.isLogedIn,
        images: hits,
      };
    });
  };

  // logout = (event) => {
  //   event.preventDefault();

  // };

  logout() {
    const { isLogedIn } = this.state;
    this.setState({ isLogedIn: false });
  }

  render() {
    const { handlerLogin, logout } = this;
    const { isLogedIn,images } = this.state;
    return (
      <Fragment>
        {isLogedIn ? (
          <Gallery logout={logout.bind(this)} pictures={images} />
        ) : (
          <form onSubmit={handlerLogin}>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="write in name"
            />

            <label>
              Password:
              <input type="password" name="password" />
            </label>

            <input type="submit" value="Submit" />
          </form>
        )}
      </Fragment>
    );
  }
}

export default App;
