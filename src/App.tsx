import { Container, Box, Typography } from '@mui/material';
import './App.css';

function App() {

  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <Typography
          component="h1"
          variant='h2'
          sx={{ mb: 3 }}
          color="primary"
        >Computech</Typography>
        <Typography
          sx={{ mb: 3, textAlign: 'justify' }}
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, suscipit. Deserunt maxime vel explicabo dignissimos non totam suscipit, placeat cumque ratione mollitia laboriosam deleniti! Aspernatur debitis expedita dicta provident eos?</Typography>
      </Box>
    </Container>
  )
}

export default App
