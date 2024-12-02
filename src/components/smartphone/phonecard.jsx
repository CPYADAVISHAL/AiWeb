import React, { useContext } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import P1 from "../../image/p1.png";
import P2 from "../../image/p2.png";
import P3 from "../../image/P3.png";
import P4 from "../../image/P4.png";
import { CartContext } from "../../context/CartContext";

const deals = [
  {
    id: 1,
    name: "Galaxy S22 Ultra",
    originalPrice: "₹74999",
    discountedPrice: "₹32999",
    savings: "₹32999",
    imageUrl: P2,
  },
  {
    id: 2,
    name: "Galaxy M13 ",
    originalPrice: "₹14999",
    discountedPrice: "₹10499",
    savings: "₹4500",
    imageUrl: P1,
  },
  {
    id: 3,
    name: "Galaxy M33 ",
    originalPrice: "₹24999",
    discountedPrice: "₹16999",
    savings: "₹8000",
    imageUrl: P4,
  },
  {
    id: 4,
    name: "Galaxy M53",
    originalPrice: "₹40999",
    discountedPrice: "₹31999",
    savings: "₹9000",
    imageUrl: P3,
  },
];

const SmartphoneDeals = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: 4,
        // backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      {/* <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "rgb(64, 64, 213)",
        }}
      >
        Smartphone Deals
      </Typography> */}
      <Grid container spacing={4}>
        {deals.map((deal) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={deal.id}>
            <Card
              sx={{
                boxShadow: 6,
                borderRadius: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 8,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={deal.imageUrl}
                alt={deal.name}
                sx={{ objectFit: "contain", padding: 2 }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  {deal.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  sx={{ textDecoration: "line-through", mt: 1 }}
                >
                  {deal.originalPrice}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: "green",
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  {deal.discountedPrice}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  sx={{ mt: 1, color: "red" }}
                >
                  Save - {deal.savings}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", mb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ textTransform: "none", mr: 1 }}
                  onClick={() => alert("Buy Now clicked!")}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  sx={{ textTransform: "none" }}
                  onClick={() => addToCart(deal)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SmartphoneDeals;
