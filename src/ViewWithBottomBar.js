import React from 'react';
import { Box } from '@mui/material';

function ViewWithBottomBar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '80px',
        backgroundColor: 'blue',
      }}
    >
      test
    </Box>
  );
}

export default ViewWithBottomBar;
