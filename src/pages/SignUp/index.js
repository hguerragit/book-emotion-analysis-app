import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Brand from '../../components/custom/Brand';
import Field from '../../components/custom/Field';
import Logon from '../../components/custom/Logon';
import MainWithBG from '../../components/custom/MainWithBG';
import RoundIcon from '../../components/custom/RoundIcon';
import ThirdPartyLogins from '../../components/custom/ThirdPartyLogins';

import {
    CLASS_ERROR,
    CLASS_OK,
    MSG_ERROR_505,
    MSG_HINT_EMAIL,
    MSG_HINT_PASSWORD,
    MSG_HINT_PASSWORD_CHECK,
    MSG_WARNING_EMAIL_EXIST,
    MSG_WARNING_EMAIL_NOT,
    MSG_WARNING_PASSWORD_DIFFERENT,
    MSG_WARNING_PASSWORD_SHORT,
    PAGE_LOGIN
} from '../../utils/constants';

import { 
    changeEmail, 
    changePassword, 
    changePasswordCheck,
    clickSignUp
} from '../../utils/actions';

const mapStateToProps = ({ access, email, password, twitter }) => ({
    ...access,
    ...email,
    ...password,
    ...twitter
});

const mapDispatchToProps = dispatch => ({
    handleEmailChange: e => dispatch(changeEmail(e.target.value)),
    handlePasswordChange: e => dispatch(changePassword(e.target.value)),
    handlePasswordCheckChange: e => dispatch(changePasswordCheck(e.target.value)),
    handleAccessRequest: (user, password) => dispatch(clickSignUp(user, password))
});

class SignUp extends React.Component {
    render() {
        const {
            handleAccessRequest,
            email,
            emailIsNew,
            emailIsValid,
            emailRequestIsPending,
            emailRequestIsSuccessful,
            handleEmailChange,
            password,
            passwordIsValid,
            handlePasswordChange,
            passwordCheck,
            passwordsMatch,
            handlePasswordCheckChange,
            handleTwitterClick
        } = this.props;

        const emailMessage = emailRequestIsPending || email === "" || (emailIsNew && emailIsValid)
            ? ""
            : !emailRequestIsSuccessful
                ? MSG_ERROR_505
                : emailIsValid
                    ? MSG_WARNING_EMAIL_EXIST
                    : MSG_WARNING_EMAIL_NOT;
        const emailStyle = email === ""
            ? ""
            : !emailIsNew || !emailIsValid || !emailRequestIsSuccessful
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
        const passwordCheckMessage = password === "" || passwordCheck === "" || passwordsMatch
            ? ""
            : MSG_WARNING_PASSWORD_DIFFERENT;
        const passwordCheckStyle = passwordCheck === "" || password === ""
            ? ""
            : passwordsMatch
                ? CLASS_OK
                : CLASS_ERROR;


        return (
            <Logon>
                <MainWithBG>
                    <form className="black h100 ml4 pa3 tc w-30">
                        <span className="context-menu">
                            <Brand /><br/>
                            Bem vindo à Kanoon! Sinta-se livre para regitrar-se
                        </span><br/>
                        <Field
                            className={`mt4 ${emailStyle}`}
                            error={emailMessage}
                            hint={MSG_HINT_EMAIL}
                            id="email"
                            label="e-mail: "
                            onChange={e => handleEmailChange(e)}
                            value={ email }
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
                        <Field
                            className={passwordCheckStyle}
                            error={passwordCheckMessage}
                            hint={MSG_HINT_PASSWORD_CHECK}
                            id="passwordCheck"
                            label="confirme a senha: "
                            onChange={e => handlePasswordCheckChange(e)}
                            value={passwordCheck}
                            type="password"
                        />
                        <section className="flex justify-center items-center mb2"> 
                            <RoundIcon
                                classButton="anima-open bg-purple-to-blue"
                                classIcon="gray-90"
                                enabled={emailIsValid && emailIsNew && passwordIsValid && passwordsMatch}
                                family="fas"
                                icon="arrow-up"
                                onClick={() => {
                                    handleAccessRequest(email, password);
                                }}
                                title="Registrar!"
                            />
                            <ThirdPartyLogins />
                        </section>
                        <div className="context-menu">
                            <span>Já tem uma conta? Clique <Link to={PAGE_LOGIN}>aqui</Link></span>
                        </div>                
                    </form>
                </MainWithBG>
            </Logon>
        );
    }
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(SignUp);