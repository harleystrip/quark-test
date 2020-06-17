import React from "react";
import { connect } from 'react-redux';
import PasswordResetModal from "./components/PasswordResetModal";
import EmailSentModal from "./components/EmailSentModal";
import { sagaActions } from "../../sagaActions";
import {AppDispatch, changeModalState} from "../../store";
import {StyledButtonComponent, StyledInputComponent} from "../../components";

declare interface LoginViewProps {
    modalType: null | 'passwordReset' | 'emailSent',
    loginUser: (credentials: any) => void,
    openPasswordResetModal: () => void
}

declare interface LoginViewState {
    email: string,
    password: string,
}

const mapStateToProps = (state: any) => {
    return { modalType: state.modalType }
}

function mapDispatchToProps(dispatch: AppDispatch) {
    return {
        loginUser: (credentials: any) => dispatch({type: sagaActions.LOGIN_USER_SAGA}),
        openPasswordResetModal: () => dispatch(changeModalState('passwordReset'))
    };
}

class LoginView extends React.PureComponent<LoginViewProps, LoginViewState> {

    constructor(props: LoginViewProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(event: React.MouseEvent) {
        event.preventDefault()
        const credentials = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(credentials)
    }

    handlePasswordReset(event: React.MouseEvent) {
        event.preventDefault()
        this.props.openPasswordResetModal()
    }


    render() {
        const {
            email,
            password
        } = this.state;
        return (
            <div className={'login-page-main-container'}>
                <div className={'login-page-controllers-container'}>
                    <div className={'login-page-form'}>
                        <div className={'login-page-header-text'}>Welcome</div>
                        <div className={'login-page-subheader-text'}>Please sign in to continue</div>
                        <div className={'login-page-separator'}/>
                        <div className={'login-page-logo'}>
                            <img style={{width: '100%'}} src={require('../../../logo-ge-light@3x.png')}/>
                        </div>
                        <div className={'login-page-inputs-container'}>
                            <StyledInputComponent value={email} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({email: e.currentTarget.value})} variant={"dark"} label={'Email'}/>
                            <StyledInputComponent value={password} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({password: e.currentTarget.value})} variant={"dark"} label={'Password'} type={'password'}/>
                            <div className={'login-page-button-group'}>
                                <StyledButtonComponent onClick={(event) => this.handleSubmit(event)} type={'info'} title={'Sign in'}/>
                                <a onClick={(event) => this.handlePasswordReset(event)} href={'#'} className={'login-page-forgot-button'}>Forgot password?</a>
                            </div>
                        </div>
                        <div className={'login-page-blog'}>
                            <div className={'login-page-blog-post'}>
                                <div className={'login-page-blog-post-header'}>LATEST BLOG POST</div><br/>
                                <div className={'login-page-blog-post-text'}>October 15, 2018</div>
                                <div className={'login-page-blog-post-text'}>
                                    Create Efficiency with a Creative Asset Management Platform
                                </div>
                            </div>
                            <div className={'login-page-blog-post'}>
                                <div className={'login-page-blog-post-header'}>RECENT TWEET</div><br/>
                                <div className={'login-page-blog-post-text'}>April 25, 2018</div>
                                <div className={'login-page-blog-post-text'}>
                                    #HenryStewartEvents are bringing their #CreativeOps show to NYC for the third…
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'login-page-empty-field'}/>
                {this.props.modalType === 'passwordReset' && <PasswordResetModal/>}
                {this.props.modalType === 'emailSent' && <EmailSentModal/>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);

