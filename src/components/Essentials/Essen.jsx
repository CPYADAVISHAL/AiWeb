import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Container
} from "@mui/material";
import P1 from "../../image/p2.png";
import P2 from "../../image/K2.png";
import P3 from "../../image/K3.png";
import P4 from "../../image/K4.png";
import P5 from "../../image/K5.png";

const deals = [
  // {
  //   id: 1,
  //   name: "Daily Essentials",
  //   discount: "UP TO 50% OFF",
  //   imageUrl: P1,
  // },
  {
    id: 2,
    name: "Vegetables",
    discount: "UP TO 50% OFF",
    imageUrl: P2,
  },
  {
    id: 3,
    name: "Fruits",
    discount: "UP TO 50% OFF",
    imageUrl: P3,
  },
  {
    id: 4,
    name: "Strawberry",
    discount: "UP TO 50% OFF",
    imageUrl: P4,
  },
  {
    id: 5,
    name: "Mango",
    discount: "UP TO 50% OFF",
    imageUrl: P5,
  },
];

const EssentialsDeals = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
    <Box
      sx={{
        mt: 4,
        mb: 4,
        px: { xs: 2, sm: 4, md: 8 },
        // backgroundColor: "#f8f8f8",
        borderRadius: "8px",
        pb: 4,
      }}
    >
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        sx={{ borderBottom: "2px solid #e0e0e0", pb: 2, mb: 3 }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        >
          DAILY{" "}
          <span style={{ color: "rgb(64, 64, 213)" }}>Essentials</span>
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

      {/* Grid Section for Deals */}
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {deals.map((deal) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={deal.id}>
            <Card
              sx={{
                boxShadow: 4,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={deal.imageUrl}
                alt={deal.name}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  color="text.primary"
                  textAlign="center"
                  sx={{ fontWeight: "bold", mt: 1 }}
                >
                  {deal.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  sx={{ fontWeight: "bold", mt: 1 }}
                >
                  {deal.discount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default EssentialsDeals;
