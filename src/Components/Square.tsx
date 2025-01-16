import React, { FC } from 'react';

interface SquareProps {
    value: 'X' | 'O' | null;
    onClick: () => void;
}

const Square: FC<SquareProps> = ({ value, onClick }) => {
    return (
        <button className={`square ${value ? 'filled' : ''}`} onClick={onClick}>
            {value === 'X' ? (
                <img
                    src="/Photos/x.png"
                    alt="X"
                    className="symbol"
                />
            ) : value === 'O' ? (
                <img
                    src="/Photos/o.png"
                    alt="O"
                    className="symbol"
                />
            ) : null}
        </button>
    );
};

export default Square;
