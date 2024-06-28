import React from 'react';
import './Button.css';

export const Button = (props) => {
    return (
        <button
            className={`
                button
                ${props.operation ? 'operation' : ''}
                ${props.erase ? 'erase' : ''}
                ${props.double_row ? 'double-row' : ''}
            `}
            onClick={e => props.onClick && props.onClick(props.op)}>
            {props.label}
        </button>
    );
}