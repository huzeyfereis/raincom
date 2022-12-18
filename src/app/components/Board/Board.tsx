import { useState, FC } from 'react';

import { Box, Typography } from '@mui/material';
import Square from '../BoardItem';

interface Props {
  currentPlayer: string;
  switchPlayer: () => void;
}

const Board: FC<Props> = ({ ...props }) => {
  const squareIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [squares, setSquares] = useState<Array<string>>(
    squareIds.map((i) => '')
  );
  const [winner, setWinner] = useState<string | null>(null);
  const { currentPlayer, switchPlayer } = props;

  const findWinner = (squares: Array<string>) => {
    const lines = [
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [x, y, z] = lines[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return true;
      }
    }
    return false;
  };

  const checkDraw = (squares: Array<string>) => {
    for (let i = 0; i < squares.length; i++) {
      const element = squares[i];
      if (element === '') {
        return false;
      }
    }
    return true;
  };

  const selectSquare = (i: number) => {
    return () => {
      if (squares[i] === '' && !winner) {
        const squaresCopy = [...squares];
        squaresCopy[i] = currentPlayer;
        setSquares(squaresCopy);
        if (findWinner(squaresCopy)) {
          setWinner(currentPlayer);
        } else if (checkDraw(squaresCopy)) {
          setWinner('nobody');
        } else {
          switchPlayer();
        }
      }
    };
  };

  return (
    <Box>
      <Typography textAlign='center' variant='h4' margin='5px'>
        {winner === 'nobody' && 'Draw!'}
        {winner === currentPlayer && `${currentPlayer} wins!`}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {squareIds.map((i) => (
          <Square
            isPlayerWins={winner ? true : false}
            key={i}
            selectSquare={selectSquare(i)}
            selected={squares[i]}
          ></Square>
        ))}
      </Box>
    </Box>
  );
};

export default Board;
