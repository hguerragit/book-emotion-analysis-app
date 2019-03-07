import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Brand from '../../components/custom/Brand';
import Field from '../../components/custom/Field';
import MainWithBG from '../../components/custom/MainWithBG';
import Logon from '../../components/custom/Logon';
import RoundIcon from '../../components/custom/RoundIcon';
import CustomModal from '../../components/custom/CustomModal';

import { changeEmail, changePassword, clickLogin } from '../../utils/actions';
import Modal from 'react-bootstrap/Modal';

const mapStateToProps = ({emailChange, passwordChange, accessButtonClick }) => ({
    ...emailChange,
    ...passwordChange,
    ...accessButtonClick
});

const mapDispatchToProps = dispatch => ({
    handleEmailChange: e => dispatch(changeEmail(e.target.value)),
    handlePasswordChange: e => dispatch(changePassword(e.target.value)),
    handleAccessButtonClick: (user, password) => dispatch(clickLogin(user, password))
});

class Login extends React.Component {
    render() {
        const {
            email,
            emailIsNew,
            emailIsValid,
            emailRequestIsPending,
            emailRequestIsSuccessful,
            handleEmailChange,
            password,
            passwordIsValid,
            handlePasswordChange,
            loginOrSignUpHasFailed,
            loginOrSignUpHasSucceded,
            loginOrSignUpRequestHasFailed,
            loginOrSignUpRequestIsPending,
            handleAccessButtonClick,
        } = this.props;

        const emailMessage = emailRequestIsPending || email === "" || (!emailIsNew && emailIsValid)
            ? ""
            : !emailRequestIsSuccessful
                ? "uh oh, something has gone wrong. Type again"
                : emailIsValid
                    ? "this e-mail is strange, we don't know it... yet"
                    : "this is not exacly an email, is it?";
        const emailStyle = email === ""
            ? ""
            : emailIsNew || !emailIsValid || !emailRequestIsSuccessful
                ? "error"
                : "ok";
        const passwordMessage = password === "" || passwordIsValid
            ? ""
            : "this password is a bit too short";
        const passwordStyle = password === ""
            ? ""
            : passwordIsValid
                ? "ok"
                : "error";

        return (
            <Logon>
                <MainWithBG>
                    <form className="black h100 ml4 pa3 tc w-30">
                        <span className="context-menu">
                            <Brand /><br/>
                            Welcome to Kanoon, please feel free to sign up
                        </span><br/>
                        <Field
                            className={`mt4 ${emailStyle}`}
                            error={emailMessage}
                            hint="my@mail.me"
                            id="email"
                            label="e-mail: "
                            onChange={e => handleEmailChange(e)}
                            value={ email }
                            type="email"
                        />
                        <Field
                            className={passwordStyle}
                            error={passwordMessage}
                            hint="must be at least 6 characters long"
                            id="password"
                            label="password: "
                            onChange={e => handlePasswordChange(e)}
                            value={password}
                            type="password"
                        />
                        <section className="flex justify-center items-center mb2"> 
                            <RoundIcon
                                classButton="anima-open bg-purple-to-blue"
                                classIcon="gray-90"
                                enabled={emailIsValid && !emailIsNew && passwordIsValid }
                                family="fas"
                                icon="arrow-up"
                                onClick={() => handleAccessButtonClick(email, password)}
                                title="Sign in"
                            />
                            <section className="tc">
                                <div className="context-menu">
                                <small>you can also connect with</small>
                                </div>
                                <span className="flex justify-center scale--75">
                                    <RoundIcon
                                        classButton="b--facebook ba bg-transparent bw1 mr2"
                                        classIcon="facebook"
                                        family="fab"
                                        icon="facebook-f"
                                        title="Facebook"
                                        onClick={() => console.log("facebook")}
                                    />
                                     <RoundIcon
                                        classButton="b--goodreads ba bg-transparent bw1 ml2 mr2"
                                        classIcon="goodreads"
                                        family="fab"
                                        icon="goodreads-g"
                                        title="Goodreads"
                                    />
                                     <RoundIcon
                                        classButton="b--twitter ba bg-transparent bw1 ml2"
                                        classIcon="twitter"
                                        family="fab"
                                        icon="twitter"
                                        title="Twitter"
                                    />
                                </span>
                            </section>
                        </section>
                        <div className="context-menu">
                        <span>Do not have an account? Click <Link to="/">here</Link></span>
                        </div>                
                    </form>
                </MainWithBG>
            </Logon>
        );
    }
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Login);