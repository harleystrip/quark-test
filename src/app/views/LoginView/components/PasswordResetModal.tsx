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

    handleModalClose() {
        this.props.changeModalState(null)
    }

    handleSendEmail() {
        this.props.changeModalState('emailSent')
    }

    render() {
        return (
            <StyledModalComponent onCancel={() => this.handleModalClose()} title={'Password reset'}>
                <span></span>
                <StyledInputComponent variant={'light'} label={'Email Address'}/>
                <StyledModalComponent.Footer>
                    <StyledButtonComponent type={'info'} title={'Submit'} />
                    <StyledButtonComponent type={'default'} title={'Cancel'} />
                </StyledModalComponent.Footer>
            </StyledModalComponent>
        );
    }
}

export default connect(null, mapDispatchToProps)(PasswordResetModal)