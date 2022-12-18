import { FC } from 'react';

import { Box, Button, Typography } from '@mui/material';

interface Props {
  currentPlayer: string;
}

const Header: FC<Props> = ({ ...props }) => {
  const { currentPlayer } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '3rem',
        width: '350px',
        margin: '100px 0 10px',
      }}
    >
      <Typography variant='h5'>{currentPlayer}'s turn</Typography>
      <Button
        variant='outlined'
        onClick={() => {
          window.location.reload();
        }}
      >
        RESTART
      </Button>
    </Box>
  );
};

export default Header;
