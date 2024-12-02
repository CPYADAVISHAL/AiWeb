import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import SmartphoneDeals from "./phonecard";

const Smartphone = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          mb: 3,
          borderBottom: "2px solid #f0f0f5",
          pb: 1,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        >
          Grab the Best Deal on{" "}
          <span style={{ color: "rgb(64, 64, 213)" }}>Smartphones</span>
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          sx={{ mt: { xs: 2, sm: 0 } }}
        >
          View All
        </Button>
      </Box>

      {/* Deals Section */}
      <SmartphoneDeals />
    </Container>
  );
};

export default Smartphone;
