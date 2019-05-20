import React from 'react';
import Heart from './NavBarImages/heartbutton.jpg';
import Cam from './NavBarImages/igcamera.jpg';
import Name from './NavBarImages/igname.jpg';
import Person from './NavBarImages/personbutton.jpg';
import NavBtn from './NavBarImages/navbutton.jpg';
class SearchBar extends React.Component {
    render() {
      return (
        <div className="Nav">
        this is my nav bar!
            <nav>
            <img src={Cam} alt="cam" />
            <img src={Name} alt="name" />
            <input placeholder="search"></input>
            <img src={NavBtn} alt="explore" />
            <img src={Heart} alt="heart" />
            <img src={Person} alt="profile" />
            </nav>
          
        </div>
      );
    }
  }

export default SearchBar;