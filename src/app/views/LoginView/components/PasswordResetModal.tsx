import React from "react";
import { connect } from 'react-redux';
import {StyledModalComponent, StyledInputComponent, StyledButtonComponent} from "../../../components";
import {AppDispatch, changeModalState} from "../../../store"

declare interface PasswordResetModalProps {
    changeModalState: (type: string | null) => void;
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeModalState: (type: string | null) => dispatch(changeModalState(type))
    }
}

class PasswordResetModal extends React.PureComponent<PasswordResetModalProps> {

    handleModalClose(event: React.MouseEvent) {
        event.preventDefault();
        this.props.changeModalState(null)
    }

    handleSendEmail(event: React.MouseEvent) {
        event.preventDefault();
        this.props.changeModalState('emailSent')
    }

    render() {
        return (
            <StyledModalComponent onCancel={(event) => this.handleModalClose(event)} title={'Password reset'}>
                <StyledModalComponent.Body>
                    <span className={'styled-modal-body-text'}>Please enter the email address associated with your globaledit account to reset your password.</span>
                    <StyledInputComponent variant={'light'} label={'Email Address'}/>
                </StyledModalComponent.Body>
                <StyledModalComponent.Footer>
                    <StyledButtonComponent onClick={event => this.handleSendEmail(event)} type={'info'} title={'Submit'} />
                    <StyledButtonComponent onClick={event => this.handleModalClose(event)} type={'default'} title={'Cancel'} />
                </StyledModalComponent.Footer>
            </StyledModalComponent>
        );
    }
}

export default connect(null, mapDispatchToProps)(PasswordResetModal)