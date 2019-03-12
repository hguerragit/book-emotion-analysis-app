import React from 'react';
import { connect } from 'react-redux';

import RoundIcon from '../RoundIcon';
import { requestAccess } from '../../../utils/actions';
import './styles/index.css';

const mapStateToProps = ({ access }) => ({
    ...access
});

const mapDispatchToProps = dispatch => ({
    handleThirdPartyAccess: thridParty => dispatch(requestAccess(thridParty))
});

class ThirdPartyLogins extends React.Component {
    componentWillMount() {
        const { handleThirdPartyAccess } = this.props;
        handleThirdPartyAccess("twitter");
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
                        onClick={() => window.open("http://api-analise-sentimento.mybluemix.net/twitter/?funcao=cadastrar")}
                    />
                </span>
            </section>
        );
    }
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(ThirdPartyLogins);
