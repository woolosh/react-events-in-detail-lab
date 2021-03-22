// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    this.props.onRecieveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>Coords</button>;
  }
}

// function CoordinatesButton(onReceiveCoordinates) {
//   return (
//     <button>
//       <span> {onReceiveCoordinates}</span>
//     </button>
//   );
// }

export default CoordinatesButton;
