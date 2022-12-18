import { useState, FC } from 'react';
import Board from './components/Board';
import Header from './components/Header';

const App: FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>('X');

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <div className='app-container'>
      <Header currentPlayer={currentPlayer} />
      <Board currentPlayer={currentPlayer} switchPlayer={switchPlayer} />
    </div>
  );
};

export default App;
