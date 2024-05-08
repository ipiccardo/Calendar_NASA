import React from 'react';

const Button = ({ children, onClick }: any) => {

    return (
        <button className="bg-primary hover:bg-secondary hover:text-primary text-white font-bold py-2 px-4 rounded" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;