// import React from "react";
// import PropTypes from "prop-types";

// function Location (props) {

//   return (
//     <React.Fragment>
//       <h3>Location</h3>
//       <h3>{props.day} - {props.location}</h3>
//       <p><em>{props.hours} - {props.booth}</em></p>
      
//     </React.Fragment>
//   );
// }

//   Location.propTypes = {
//     day: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     time: PropTypes.string
//   };

// export default Location;



import React from 'react';
import PropTypes from 'prop-types';
//import './components/App.css' 

function Location(props){
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <p><em>{props.booth}</em></p>
    </React.Fragment>
  );
}

Location.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default Location;