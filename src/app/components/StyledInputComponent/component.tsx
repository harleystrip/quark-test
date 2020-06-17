import React from "react";

declare interface StyledInputProps {
    value?: string,
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
    variant: 'dark' | 'light',
    type?: 'password' | undefined,
    label: string
}

export default class StyledInputComponent extends React.PureComponent<StyledInputProps, {active: boolean}>{
    constructor(props: StyledInputProps) {
        super(props);
        this.state = {
            active: false
        }
    }

    render() {
        const {
            value,
            onChange,
            variant,
            label,
            type
        } = this.props;
        const {
            active
        } = this.state;
        return (
            <div className={'styled-input-container'}>
                <span className={'styled-input-label'}>{label}</span>
                <input value={value} onChange={onChange} type={type} onFocus={() => this.setState({active: true})}
                       onBlur={() => this.setState({active: false})}
                       className={`styled-input styled-input-${variant}${active ? '-active' : ''} styled-input-text styled-input-text-${variant}`}/>
            </div>
        );
    }
}