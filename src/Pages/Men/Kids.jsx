import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

// Import images
import GiniAndJony from "./assets/images/kids_gini_and_jony.jpg";
import Hamleys from "./assets/images/kids_hamleys.jpg";
import Lilliput from "./assets/images/kids_lilliput.jpg";
import Mothercare from "./assets/images/kids_mothercare.jpg";
import Disney from "./assets/images/kids_disney.jpg";
import PumaKids from "./assets/images/kids_puma_kids.jpg";

// Kids’ brands
const brands = [
  { name: "Gini & Jony", brand: "Trendy Apparel", img: GiniAndJony },
  { name: "Hamleys", brand: "Toys & Games", img: Hamleys },
  { name: "Lilliput", brand: "Children’s Clothing", img: Lilliput },
  { name: "Mothercare", brand: "Infant Essentials", img: Mothercare },
  { name: "Disney", brand: "Toys & Accessories", img: Disney },
  { name: "Puma Kids", brand: "Activewear", img: PumaKids },
];

const Kids = () => {``
  return (
    <Box sx={{ padding: "40px", background: "linear-gradient(to bottom, #e3f2fd, #bbdefb)" }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: "#1976d2",
          textTransform: "uppercase",
          marginBottom: "30px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Popular Kids Brands
      </Typography>
      <Grid container spacing={4}>
        {brands.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 5,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={item.img}
                alt={item.name}
                sx={{
                  borderBottom: "4px solid #1976d2",
                  filter: "brightness(0.9)",
                }}
              />
              <CardContent sx={{ textAlign: "center", background: "#e3f2fd" }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#333" }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.brand}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Kids;
