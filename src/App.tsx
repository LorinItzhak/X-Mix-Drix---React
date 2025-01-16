import React, {FC} from 'react';
import Board from './Components/Board';
import 'bootstrap/dist/css/bootstrap.min.css';

const App:FC = () => {
    return (
        <div className="container d-flex flex-column text-center justify-content-center align-items-center">
            <h1 className="mb-4">X Mix Drix</h1>
            <Board />
        </div>
    );
};

export default App;
