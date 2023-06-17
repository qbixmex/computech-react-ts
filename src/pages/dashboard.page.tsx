import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography
        variant="h1"
        component="h1"
        sx={{ my: 2, textAlign: "center" }}
      >Dashboard</Typography>
    </Container>
  );
};

export default Dashboard;