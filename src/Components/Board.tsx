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
        <div className="game-container">
            <div className="board">
                {squares.map((square, index) => (
                    <Square
                        key={index}
                        value={square}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>

            <div className="game-info">
                {!winner && !squares.every((square) => square) && (
                    <p className="status">{isXNext ? 'X' : 'O'}'s Turn</p>
                )}
                {winner && (
                    <>
                        <p className="status winner">{winner} Wins!</p>
                        <button className="btn" onClick={resetGame}>
                            Play Again
                        </button>
                    </>
                )}
                {!winner && squares.every((square) => square) && (
                    <>
                        <p className="status">It's a Draw!</p>
                        <button className="btn" onClick={resetGame}>
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
