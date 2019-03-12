import React from 'react';
import './style.css';
import RoundIcon from '../RoundIcon';


class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="dropdown" style={{ background: "white"}} >
        <RoundIcon
          classButton="anima-flip bg-transparent bn"
          classIcon="black"
          family="fas"
          icon="bars"
          title="menu"
          onClick={this.showDropdownMenu}
        />
        
        {this.state.displayMenu ? (
          <ul>
            <li><a href="#Manage Pages">Twitter</a></li>
            <li><a href="#Create Ads">Goodreads</a></li>
            <li><a href="#Manage Ads">Sair</a></li>
          </ul>
        ) :
          (
            null
          )
        }

      </div>

    );
  }

}

export default Dropdown;
