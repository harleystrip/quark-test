import React from "react";
import { connect } from 'react-redux';
import PasswordResetModal from "./components/PasswordResetModal";
import EmailSentModal from "./components/EmailSentModal";
import { sagaActions } from "../../sagaActions";
import {AppDispatch, changeModalState} from "../../store";

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
            <div>
                <div>
                    <div>
                        <div>
                            <button onClick={(event) => this.handleSubmit(event)}>CLICK!!!</button>
                            <button onClick={(event) => this.handlePasswordReset(event)}>RESET PASSSSSS!!!</button>
                        </div>
                        <div></div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div/>
                {this.props.modalType === 'passwordReset' && <PasswordResetModal/>}
                {this.props.modalType === 'emailSent' && <EmailSentModal/>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);

