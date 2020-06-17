import React from "react";
import {StyledModalComponent} from "../../../components";
import {AppDispatch, changeModalState} from "../../../store";
import {connect} from "react-redux";
import {sagaActions} from "../../../sagaActions";

declare interface EmailSentModalProps {
    changeModalState: (type: string | null) => void;
    emulateAPICall: () => void;
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeModalState: (type: string | null) => dispatch(changeModalState(type)),
        emulateAPICall: () => dispatch({type: sagaActions.SEND_EMAIL_SAGA})
    }
}

class EmailSentModal extends React.PureComponent<EmailSentModalProps>{

    handleModalClose() {
        this.props.emulateAPICall()
        this.props.changeModalState(null)
    }

    render() {
        return (
            <StyledModalComponent title={'Email Sent'} onCancel={() => this.handleModalClose()}>
                <StyledModalComponent.Body>
                    <span className={'styled-modal-body-text'}>Thank you, instructions to reset your password have been e-mailed to the address you provided!</span>
                </StyledModalComponent.Body>
            </StyledModalComponent>
        );
    }
}

export default connect(null, mapDispatchToProps)(EmailSentModal)