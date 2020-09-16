/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import React from 'react';
import './Inputs.css';

export default function Inputs({ type, placeholder, name, id, isRequired }) {
    return (
        <div>
            <input
                className={'input-style'}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                required={isRequired}
            />
        </div>
    );
}
