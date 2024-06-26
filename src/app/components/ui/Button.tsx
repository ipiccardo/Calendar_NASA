import React from 'react';
import { ButtonProps } from '../../../../types';



const Button = ({ children, onClick, disabled, name }: ButtonProps) => {


    return (
        <button className="bg-primary hover:bg-secondary hover:text-primary text-white font-bold py-2 px-4 rounded disabled:hover:bg-slate-500 text-xl" onClick={onClick} disabled={name === 'next' && disabled && disabled}>
            {children}
        </button>
    );
};

export default Button;