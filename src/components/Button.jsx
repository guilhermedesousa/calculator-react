import React from 'react';
import './Button.css';

export const Button = (props) => {
    return (
        <button
            className={`
                button
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
            `}
            onClick={e => props.onClick && props.onClick(props.label)}>
            {props.label}
        </button>
    );
}