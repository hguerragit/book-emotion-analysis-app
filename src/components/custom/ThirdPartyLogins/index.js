import React from 'react';
import { connect } from 'react-redux';

import RoundIcon from '../RoundIcon';
import { changeUserId, requestAccess } from '../../../utils/actions';
import './styles/index.css';

const getCookie = name => document.cookie
    .split("; ")
    .filter(cookie => cookie.indexOf(name) === 0)[0]
    .split("=")[1];

const eraseCookie = name => { document.cookie = `${name}=; Max-Age=-99999999`; };

const mapStateToProps = ({ access }) => ({
    ...access
});

const mapDispatchToProps = dispatch => ({
    handleChangeUserId: userId => dispatch(changeUserId(userId)),
    handleThirdPartyAccess: thridParty => dispatch(requestAccess(thridParty))
});

class ThirdPartyLogins extends React.Component {
    componentWillMount() {
        const { handleChangeUserId } = this.props;
        const userId = getCookie("kanoon");

        eraseCookie("kanoon");
        handleChangeUserId(userId);
        //handleThirdPartyAccess("twitter");
    }

    render() {
        return (
            <section className="tc">
                <div className="context-menu">
                    <small>você também pode se conectar com</small>
                </div>
                <span className="flex justify-center scale--75">
                    <RoundIcon
                        classButton="anima-jump b--facebook ba bg-transparent bw1 mr2"
                        classIcon="facebook"
                        family="fab"
                        icon="facebook-f"
                        title="Facebook"
                        onClick={() => console.log("facebook")}
                    />
                     <RoundIcon
                        classButton="anima-jump b--goodreads ba bg-transparent bw1 ml2 mr2"
                        classIcon="goodreads"
                        family="fab"
                        icon="goodreads-g"
                        title="Goodreads"
                    />
                     <RoundIcon
                        classButton="anima-jump b--twitter ba bg-transparent bw1 ml2"
                        classIcon="twitter"
                        family="fab"
                        icon="twitter"
                        title="Twitter"
                        onClick={() => window.open("http://api-analise-sentimento.mybluemix.net/twitter/?funcao=login")}
                    />
                </span>
            </section>
        );
    }
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(ThirdPartyLogins);
