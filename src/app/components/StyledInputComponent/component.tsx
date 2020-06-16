import React from "react";

declare interface StyledInputProps {
    value?: string,
    onChange?: () => void,
    variant: 'dark-active' | 'dark-inactive' | 'light',
    type?: 'password' | null,
    label: string
}

export default class StyledInputComponent extends React.PureComponent<StyledInputProps>{
    render() {
        const {
            value,
            onChange,
            variant,
            label
        } = this.props;
        return (
            <div>
                <span>{label}</span>
                <div className={`styled-input styled-input-${variant}`}>
                    <input value={value} onChange={onChange} className={'styled-input-text'}/>
                </div>
            </div>
        );
    }
}