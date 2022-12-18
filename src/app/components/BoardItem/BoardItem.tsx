import { Button, Box } from '@mui/material';
import { FC } from 'react';

interface Props {
  selectSquare: () => void;
  selected: string;
  isPlayerWins: boolean;
}

const BoardItem: FC<Props> = ({ ...props }) => {
  const { selectSquare, selected, isPlayerWins } = props;

  return (
    <Button
      disabled={isPlayerWins}
      variant='outlined'
      sx={{
        height: '140px',
        width: '140px',
        fontSize: '3rem',
        borderRadius: '0px',
      }}
      onClick={selectSquare}
    >
      {selected ? selected : ''}
    </Button>
  );
};

export default BoardItem;
