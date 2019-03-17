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
          <ul className="dropdownList dropdownLineLC dropdownLineH"> {/* Falta adicionar os links corretos no menu*/}
            <li className="dropdownLine dropdownLine dropdownLineA dropdownLineHover"><a href="">Twitter</a></li>
            <li className="dropdownLine dropdownLine dropdownLineA dropdownLineHover"><a href="">Goodreads</a></li>
            <li className="dropdownLine dropdownLine dropdownLineA dropdownLineHover"><a href="">Sair</a></li>
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
