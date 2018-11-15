import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';
import Single from './Single';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <PhotoGrid />
        <Single />
      </div>
    )
  }
}

export default Main;