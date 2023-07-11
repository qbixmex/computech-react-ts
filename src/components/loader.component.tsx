import Box from "@mui/material/Box/Box";
import Modal from "@mui/material/Modal/Modal";
import Typography from "@mui/material/Typography/Typography";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #444',
  borderRadius: '15px',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
};

const Loader = () => {
  return (
    <Modal open={true}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="p">
          Saving
        </Typography>
        <CircularProgress />
      </Box>
    </Modal>
  );
};

export default Loader;