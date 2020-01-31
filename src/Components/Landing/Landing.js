import React from 'react';
import './Landing.css';

class Landing extends React.Component {
  render(){
    return (
      <div className="home">
        <h1>Welcome to Petful Animal Shelter</h1>
        <p>We are a shelter for dogs and cats that need a loving home.  Once started, 
          we will show you the next cat and dog that need to be adopted.  Animals will be adopted on a first in, first out basis.  If you wish, you may wait in line for the new set of animals to be adopted.</p>
        <p>Our animals are eager to meet you!</p>
        <img className="cat-dog-img" alt="cute cat and dog" src="https://i.pinimg.com/originals/bf/c9/69/bfc969fb4f7d4faa7d81583de32573b5.jpg" ></img>
        <br></br>
        <button 
          type="button" 
          className="start-button" 
          onClick={() => {this.props.history.push('/adopt')}}>Start</button>
      </div>
    )
  }
}

export default Landing;