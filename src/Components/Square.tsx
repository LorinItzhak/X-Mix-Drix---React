import React ,{FC}from 'react'

interface SquareProps {
    value: 'X' | 'O' | null;
    onClick: () => void;
}


const Square: FC<SquareProps> = ({ value, onClick }) => {
    return (
        <button
            className="btn d-flex justify-content-center align-items-center bg-white"
            onClick={onClick}
            style={{ width: '250px', height: '200px' }} // קביעת גודל קבוע לכפתור
        >
            {value === 'X' ? (
                <img src="../../public/Photos/x.png" alt="X" className="img-fluid" style={{ maxWidth: '70%', maxHeight: '70%' }} />
            ) : value === 'O' ? (
                <img src="../../public/Photos/O.png" alt="O" className="img-fluid" style={{ maxWidth: '70%', maxHeight: '70%' }} />
            ) : null}
        </button>
    );
};

 

export default Square
