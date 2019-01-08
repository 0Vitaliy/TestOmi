import React, { Component } from 'react';
import './style.css';

class Input extends Component {
    render() {
        const {className,placeholder,value,error,onChange,name,max}=this.props;

        return (
            <div className="inputBlock" >
                <input
                       type="text"
                       name={name}
                       placeholder={placeholder}
                       onChange={(e)=>onChange(e)}
                       className={className}
                       value={value}
                       maxLength={max}

                />
                <span className={error}>Wrong {placeholder}</span>
            </div>
        );
    }
}

export default Input;