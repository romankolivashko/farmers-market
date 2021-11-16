import React from 'react';

class Days extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false
  };
}

handleClick = () => {
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage
  }));
}

render(){
  let currentlyVisibleState = null;
  // let buttonText = null; // new code
  if (this.state.formVisibleOnPage) {
    // currentlyVisibleState = <NewTicketForm />;
    // buttonText = "Return to Ticket List"; // new code
  } else {
    // currentlyVisibleState = <TicketList />;
    // buttonText = "Add Ticket"; // new code
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>Monday</button> 
      <button onClick={this.handleClick}>Tuesday</button>
      <button onClick={this.handleClick}>Wednesday</button>
      <button onClick={this.handleClick}>Thursday</button>
      <button onClick={this.handleClick}>Friday</button>
      <button onClick={this.handleClick}>Saturday</button>
      <button onClick={this.handleClick}>Sunday</button>
    </React.Fragment>
  );
}

}

export default Days;