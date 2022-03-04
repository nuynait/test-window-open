import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <Box display="flex">
      <Button variant="outlined" onClick={() => navigate('/test')}>
        Open in this page
      </Button>
      <Box width="20px" />
      <Button
        variant="outlined"
        onClick={() => {
          window.open('/test');
        }}
      >
        Open in new window
      </Button>
    </Box>
  );
}

export default App;
