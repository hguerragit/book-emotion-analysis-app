import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Brand from '../../components/custom/Brand';
import Field from '../../components/custom/Field';
import MainWithBG from '../../components/custom/MainWithBG';
import Logon from '../../components/custom/Logon';
import Modal from '../../components/custom/Modal';
import RoundIcon from '../../components/custom/RoundIcon';
import ThirdPartyLogins from '../../components/custom/ThirdPartyLogins';

import {
    CLASS_ERROR,
    CLASS_OK,
    MSG_ERROR_505,
    MSG_HINT_EMAIL,
    MSG_HINT_PASSWORD,
    MSG_WARNING_EMAIL_NOT,
    MSG_WARNING_EMAIL_NOT_EXIST,
    MSG_WARNING_PASSWORD_SHORT,
    PAGE_SIGN_UP,
    STATUS_SUCCESS
} from '../../utils/constants';
import { changeEmail, changePassword, clickLogin } from '../../utils/actions';

const mapStateToProps = ({email, password, access }) => ({
    ...access,
    ...email,
    ...password
});

const mapDispatchToProps = dispatch => ({
    handleEmailChange: e => dispatch(changeEmail(e.target.value)),
    handlePasswordChange: e => dispatch(changePassword(e.target.value)),
    handleAccessRequest: (user, password) => dispatch(clickLogin(user, password))
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true
        };

        this.handleStateChange = this.handleStateChange.bind(this);
    }

    handleStateChange(state, value) {
        this.setState({
            [state]: value
        });
    }

    render() {
        const { handleStateChange, props, state } = this;
        const { modalIsOpen } = state;
        const {
            accessHasFailed,
            accessHasSucceded,
            accessRequestHasFailed,
            accessRequestIsPending,
            handleAccessRequest,
            email,
            emailIsNew,
            emailIsValid,
            emailRequestIsPending,
            emailRequestIsSuccessful,
            handleEmailChange,
            password,
            passwordIsValid,
            handlePasswordChange
        } = props;

        const emailMessage = emailRequestIsPending || email === "" || (!emailIsNew && emailIsValid)
            ? ""
            : !emailRequestIsSuccessful
                ? MSG_ERROR_505
                : emailIsValid
                    ? MSG_WARNING_EMAIL_NOT_EXIST
                    : MSG_WARNING_EMAIL_NOT;
        const emailStyle = email === ""
            ? ""
            : emailIsNew || !emailIsValid || !emailRequestIsSuccessful
                ? CLASS_ERROR
                : CLASS_OK;
        const passwordMessage = password === "" || passwordIsValid
            ? ""
            : MSG_WARNING_PASSWORD_SHORT;
        const passwordStyle = password === ""
            ? ""
            : passwordIsValid
                ? CLASS_OK
                : CLASS_ERROR;

        return (
            <Logon>
                <MainWithBG>
                    <Modal 
                        isOpen={modalIsOpen}
                        title="Senha e usuário não combinam" 
                        toCloseOnClick={() => handleStateChange("modalIsOpen", false)}
                    >
                        Clique em okay e tente novamente, use outras credenciais<br/>
                        ou registre uma conta nova
                        <div className="mt2">
                            <button 
                                className="bg-blue-60 bn br3 f6 link mb2 ph3 pointer pv2 white"
                                onClick={() => handleStateChange("modalIsOpen", false)}
                            >
                                ok
                            </button>
                            <Link to={PAGE_SIGN_UP}>
                                <button className="bg-blue-60 bn br3 f6 link mb2 ml1 ph3 pointer pv2 white">
                                    registrar-se
                                </button>
                            </Link>
                        </div>
                    </Modal>
                    <form className="black h100 ml4 pa3 tc w-30">
                        <span className="context-menu">
                            <Brand /><br/>
                            Olá de novo! Estamos muito felizes em te ver ;)
                        </span><br/>
                        <Field
                            className={`mt4 ${emailStyle}`}
                            error={emailMessage}
                            hint={MSG_HINT_EMAIL}
                            id="email"
                            label="e-mail: "
                            onChange={e => handleEmailChange(e)}
                            value={email}
                            type="email"
                        />
                        <Field
                            className={passwordStyle}
                            error={passwordMessage}
                            hint={MSG_HINT_PASSWORD}
                            id="password"
                            label="senha: "
                            onChange={e => handlePasswordChange(e)}
                            value={password}
                            type="password"
                        />
                        <section className="flex justify-center items-center mb2">
                            <RoundIcon
                                classButton="anima-open bg-purple-to-blue"
                                classIcon="gray-90"
                                enabled={emailIsValid && !emailIsNew && passwordIsValid}
                                family="fas"
                                icon="arrow-up"
                                onClick={async () => {
                                    const request = await handleAccessRequest(email, password);
                                    if (request.payload.status !== STATUS_SUCCESS) {
                                        alert("E-mail ou senha incorretos");
                                    }
                                }}
                                title="Logar!"
                            />
                            <ThirdPartyLogins />
                        </section>
                        <div className="context-menu">
                            <span>Ainda não tem uma conta? Clique <Link to={PAGE_SIGN_UP}>aqui</Link></span>
                        </div>                
                    </form>
                </MainWithBG>
            </Logon>
        );
    }
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Login);