import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

// Import images
import AliaBhatt from "./assets/images/alia_bhatt_manish_malhotra.jpg";
import DeepikaPadukone from "./assets/images/deepika_padukone_levis.jpg";
import PriyankaChopra from "./assets/images/priyanka_chopra_bulgari.jpg";
import KareenaKapoor from "./assets/images/kareena_kapoor_tanishq.jpg";
import AnushkaSharma from "./assets/images/anushka_sharma_nike.jpg";
import KatrinaKaif from "./assets/images/katrina_kaif_kay_beauty.jpg";

// Women’s brands
const brands = [
  { name: "Alia Bhatt", brand: "Manish Malhotra", img: AliaBhatt },
  { name: "Deepika Padukone", brand: "Levi's", img: DeepikaPadukone },
  { name: "Priyanka Chopra", brand: "Bulgari", img: PriyankaChopra },
  { name: "Kareena Kapoor", brand: "Tanishq", img: KareenaKapoor },
  { name: "Anushka Sharma", brand: "Nike", img: AnushkaSharma },
  { name: "Katrina Kaif", brand: "Kay Beauty", img: KatrinaKaif },
];

const Women = () => {
  return (
    <Box sx={{ padding: "40px", background: "linear-gradient(to bottom, #fff5f8, #ffe6eb)" }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: "#e91e63",
          textTransform: "uppercase",
          marginBottom: "30px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Iconic Women's Brands
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
                  borderBottom: "4px solid #e91e63",
                  filter: "brightness(0.9)",
                }}
              />
              <CardContent sx={{ textAlign: "center", background: "#fff9fb" }}>
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

export default Women;
