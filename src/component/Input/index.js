import React, { Component } from 'react';
import './style.css';

class Input extends Component {
    render() {
        const {lastName,firstName,placeholder,value,error,onChange,name}=this.props;

        return (
            <div className="inputBlock" >
                <input
                       type="text"
                       name={name}
                       placeholder={placeholder}
                       onChange={(e)=>onChange(e)}
                       className={lastName||firstName }
                       value={value}

                />
                <span className={error}>Wrong {placeholder}</span>
            </div>
        );
    }
}

export default Input;