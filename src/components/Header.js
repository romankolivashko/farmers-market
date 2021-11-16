import React from "react";

// const mainLinks = [
//   {
//     link: 'Twitter'
//   },
//   {
//     link: 'LinkedIn'
//   },
//   {
//     link: 'Facebook'
//   }
// ];

function Header(){
  return (
    <React.Fragment>
      <h2>Welcome to Avery's Farmer's Market</h2>
       {/* {mainLinks.map((headerLinks, index) =>
         <HeaderLinks 
           link={headerLinks.link}
           key={index}/>
      )}
      <HeaderSearch /> */}
    </React.Fragment>
  );
}


export default Header;