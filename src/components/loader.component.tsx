import Box from '@mui/material/Box/Box';
import Modal from '@mui/material/Modal/Modal';
import Typography from '@mui/material/Typography/Typography';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import { box } from './loader.styles';

const Loader = () => {
  return (
    <Modal open={true}>
      <Box sx={box}>
        <Typography variant="h6" component="p">
          Saving
        </Typography>
        <CircularProgress />
      </Box>
    </Modal>
  );
};

export default Loader;
