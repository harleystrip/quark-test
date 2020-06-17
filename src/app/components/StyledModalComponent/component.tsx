import React from "react";

declare interface StyledModalProps {
    title: string,
    onCancel: (event: React.MouseEvent) => void
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

class StyledModalCompopnentBody extends React.PureComponent{
    render() {
        const {
            children,
        } = this.props;
        return (
            <div className={'styled-modal-body'}>
                {children}
            </div>
        );
    }
}

export default class StyledModalComponent extends React.PureComponent<StyledModalProps> {
    static Footer = StyledModalComponentFooter;
    static Body = StyledModalCompopnentBody;

    render() {
        const {
            children,
            title,
            onCancel
        } = this.props;
        return (
            <div className={'styled-modal-background'}>
            <div className={'styled-modal-container'}>
                <div className={'styled-modal-header'}>
                    <span className={'styled-modal-header-text'}>{title}</span>
                    <i onClick={onCancel} className={'styled-modal-header-icon'}>x</i>
                </div>
                {children}
            </div>
            </div>
        );
    }
}