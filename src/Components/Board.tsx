import React, { useState } from 'react';
import Square from './Square';

type SquareValue = 'X' | 'O' | null;

const Board: React.FC = () => {
    const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);

    const handleClick = (index: number) => {
        if (squares[index] || calculateWinner(squares)) return;

        const newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(squares);

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div
            className="bg-dark p-4 d-flex border border-3 border-gray-700 justify-content-center flex-column align-items-center"
            style={{ maxWidth: '60%' }}
        >
            <div
                className="row justify-content-center bg-dark border border-3 border-black p-1 mb-3"
                style={{ maxWidth: '100%' }}
            >
                {squares.map((square, index) => (
                    <div
                        key={index}
                        className="col-4 p-1 m-0 d-flex justify-content-center align-items-center"
                    >
                        <Square value={square} onClick={() => handleClick(index)} />
                    </div>
                ))}
            </div>

            {/* קטע ההודעות והכפתור */}
            <div
                className="text-center text-white"
                style={{
                    minHeight: '100px', 
                }}
            >
                {!winner && !squares.every((square) => square) && (
                    <p className="fs-4">{isXNext ? 'X' : 'O'} Play</p>
                )}

                {winner && (
                    <>
                        <p className="fs-4">{winner} Wins!</p>
                        <button className="btn btn-secondary " onClick={resetGame}>
                            Play Again
                        </button>
                    </>
                )}

                {!winner && squares.every((square) => square) && (
                    <>
                        <p className="fs-4">It's a Draw!</p>
                        <button className="btn btn-secondary  " onClick={resetGame}>
                            Play Again
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

const calculateWinner = (squares: SquareValue[]): SquareValue => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Board;
