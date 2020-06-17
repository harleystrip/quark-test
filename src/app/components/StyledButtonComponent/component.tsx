import React from "react";

declare interface StyledButtonInterface {
    type: 'default' | 'info',
    title: string,
    onClick?: (event: React.MouseEvent) => void
}

export default class StyledButtonComponent extends React.PureComponent<StyledButtonInterface>{
    render() {
        const {
            type,
            title,
            onClick
        } = this.props;

        return (
            <button onClick={onClick} className={`styled-button styled-button-${type}`}>
                <span className={'styled-button-text'}>{title}</span>
            </button>
        );
    }
}