import React from 'react';
import { connect } from 'react-redux';

import RoundIcon from '../RoundIcon';
import api from '../../../utils/api';
import decrypt from '../../../utils/crypto';
import { changeUserId, requestAccess } from '../../../utils/actions';
import { ACCESS_GOODREADS, ACCESS_TWITTER } from '../../../utils/constants';

import './styles/index.css';

const getParamValue = (url, paramName) => {
    const queryString = url.split("?")[1] || "";
    const params = queryString.split("&");
    const param = params.filter(p => p.includes(paramName))[0] || "";
    const value = param.split("=")[1];

    return value;
};

const replaceAt = (str, char, ...pos) => {
    const chars = str.split("");
    const newStr = chars.reduce((str, ch, i) => {
        const isMarked = pos.includes(i);
        const s = isMarked ? str+char : str+ch;

        return s;
    }); 

    return newStr;
};

const mapStateToProps = ({ access }) => ({
    ...access
});

const mapDispatchToProps = dispatch => ({
    handleChangeUserId: userId => dispatch(changeUserId(userId)),
    handleThirdPartyAccess: thridParty => dispatch(requestAccess(thridParty))
});

class ThirdPartyLogins extends React.Component {
    async componentWillMount() {
        const id = getParamValue(window.location.href, "id") || "";
        const { iv, key } = await api.keys();
        const decrypted = decrypt(id, key, iv);

        const clean = decrypted
            .split("b")
            .join("")
            .split("\x00")
            .join("");

        this.props.handleChangeUserId(clean);
    }

    render() {
        return (
            <section className="tc">
                <div className="context-menu">
                    <small>você também pode se conectar com</small>
                </div>
                <span className="flex justify-center scale--75">
                    <RoundIcon
                        classButton="anima-jump b--goodreads ba bg-transparent bw1 ml2 mr2"
                        classIcon="goodreads"
                        family="fab"
                        icon="goodreads-g"
                        title="Goodreads"
                        onClick={() => window.location.replace(ACCESS_GOODREADS)}
                    />
                    <RoundIcon
                        classButton="anima-jump b--twitter ba bg-transparent bw1 ml2"
                        classIcon="twitter"
                        family="fab"
                        icon="twitter"
                        title="Twitter"
                        onClick={() => window.location.replace(ACCESS_TWITTER)}
                    />
                </span>
            </section>
        );
    }
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(ThirdPartyLogins);
