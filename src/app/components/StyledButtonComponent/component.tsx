import React from "react";

declare interface StyledButtonInterface {
    type: 'default' | 'info',
    title: string
}

export default class StyledButtonComponent extends React.PureComponent<StyledButtonInterface>{
    render() {
        const {
            type,
            title
        } = this.props;

        return (
            <div className={`styled-button styled-button-${type}`}>
                <span className={'styled-button-text'}>{title}</span>
            </div>
        );
    }
}