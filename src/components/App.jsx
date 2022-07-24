import { Component, Fragment } from 'react';
import Gallery from './Gallery/Gallery';
import { getImages } from 'services/pixabyApi';
import styled from 'styled-components';

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
    const { isLogedIn, images } = this.state;
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

export const Marker = styled.div`
  /* display: block;
  width: 100px;
  height: 100px;
  color: blue;
  background-color: red; */
  /* background-color: ${({ is }) => is ? "green" : "red" }; */
   width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${({ isDone }) => {
    console.log(isDone)
    return isDone ? "green" : "red"
  }};
` 

export default App;
