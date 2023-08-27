import React from "react";
import { Container, Typography } from "@mui/material";

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1">
        Please refresh the page or try again later.
      </Typography>
    </Container>
  );
};

export default ErrorPage;
