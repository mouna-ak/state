// Importing React and Component modules
import React, { Component } from 'react';

// Importing CSS file and image
import './App.css';
import photo from "./webdev.jpg"

// Defining a class component called App
class App extends Component {
  constructor(props) {
    super(props);

    // Initializing the state of the App component
    this.state = {
      person: {
        fullName: 'Akebli Mouna',
        bio: 'Full stack developer.',
        imgSrc: photo,
        profession: 'Developer',
      },
      shows: false,
      elapsedTime: 0,
    };
  }

  // Lifecycle method that runs after the component has mounted
  componentDidMount() {
    this.startTimer();
  }

  // Lifecycle method that runs after the component has updated
  componentDidUpdate(prevProps, prevState) {
    if (prevState.shows !== this.state.shows) {
      this.resetTimer();
      this.startTimer();
    }
  }

  // Lifecycle method that runs before the component unmounts
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Timer functions
  startTimer() {
    this.intervalId = setInterval(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 1 });
    }, 1000);
  }

  resetTimer() {
    this.setState({ elapsedTime: 0 });
    clearInterval(this.intervalId);
  }

  // Rendering the App component JSX
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, elapsedTime } = this.state;

    return (
      <div className="container">
        {/* Button to show or hide the profile */}
        <button className="btn" onClick={() => this.setState({ shows: !shows })}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {/* Rendering the profile if shows is true */}
        {shows && (
          <div className="profile">
            <img className="profile-img" src={imgSrc} alt={fullName} />
            <h1 className="profile-name">{fullName}</h1>
            <h2 className="profile-title">{profession}</h2>
            <p className="profile-bio">{bio}</p>
          </div>
        )}

        {/* Rendering the elapsed time */}
        <p className="elapsed-time">Elapsed Time: {elapsedTime}s</p>
      </div>
    );
  }
}

// Exporting the App component as the default export of this module
export default App;