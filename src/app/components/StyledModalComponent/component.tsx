import React from "react";

declare interface StyledModalProps {
    title: string,
    onCancel: () => void
}

class StyledModalComponentFooter extends React.PureComponent {
    render() {
        return (
            <div className={'styled-modal-footer'}>
                {this.props.children}
            </div>
        );
    }
}

export default class StyledModalComponent extends React.PureComponent<StyledModalProps> {
    static Footer = StyledModalComponentFooter;

    render() {
        const {
            children,
            title,
            onCancel
        } = this.props;
        return (
            <div className={'styled-modal-container'}>
                <div className={'styled-modal-header'}>
                    <span>{title}</span>
                    <i onClick={onCancel} className={'styled-modal-header-icon'}>x</i>
                </div>
                <div className={'styled-modal-body'}>
                    {children}
                </div>
            </div>
        );
    }
}