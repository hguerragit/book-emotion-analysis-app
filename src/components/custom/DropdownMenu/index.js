import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RoundIcon from '../RoundIcon';

import { changePassword, changeUserId } from '../../../utils/actions';

import { 
  ACCESS_GOODREADS, 
  ACCESS_TWITTER,
  PAGE_LOGIN
} from '../../../utils/constants';

import './style.css';

const mapStateToProps = ({ access, password }) => ({
    ...access,
    ...password
});

const mapDispatchToProps = dispatch => ({
    handleChangeUserId: userId => dispatch(changeUserId(userId)),
    handlePasswordChange: password => dispatch(changePassword(password))
});

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
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
    const { handlePasswordChange, handleChangeUserId } = this.props;
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
        
        {
          this.state.displayMenu 
          ? (
            <ul className="dropdownList dropdownLineLC dropdownLineH">
              <li 
                onClick={() => window.open(ACCESS_TWITTER)}
                className="dropdownLine dropdownLine dropdownLineA dropdownLineHover pointer"
              >
                Twitter
              </li>
              <li 
                onClick={() => window.open(ACCESS_GOODREADS)}
                className="dropdownLine dropdownLine dropdownLineA dropdownLineHover pointer"
              >
                Goodreads
              </li>
              <li className="dropdownLine dropdownLine dropdownLineA dropdownLineHover pointer"
              >
                <Link 
                  to={PAGE_LOGIN} 
                  className="black-10 dropdownLineHover"
                  onClick={() => {
                    handlePasswordChange("");
                    handleChangeUserId("");
                  }}
                >Sair</Link>
              </li>
            </ul>
          ) 
          : (
            null
          )
        }

      </div>

    );
  }

}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Dropdown);
