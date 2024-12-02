import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import HrithikArrow from "./assets/images/hrithik_arrow.jpg";
import RohitSharma from "./assets/images/rohit_sharma.jpg";
import SuryakumarYadav from "./assets/images/suryakumar_yadav.jpg";
import RamCharan from "./assets/images/ram_charan.jpg";
import AyushmannKhurrana from "./assets/images/ayushmann_khurana.jpg";
import SalmanKhan from "./assets/images/salman_khan.jpg";

const brands = [
  { name: "Hrithik Roshan", brand: "Arrow", img: HrithikArrow },
  { name: "Rohit Sharma", brand: "Adidas", img: RohitSharma },
  { name: "Suryakumar Yadav", brand: "Reebok", img: SuryakumarYadav },
  { name: "Ram Charan", brand: "Manyavar", img: RamCharan },
  { name: "Ayushmann Khurrana", brand: "Peter England", img: AyushmannKhurrana },
  { name: "Salman Khan", brand: "Being Human", img: SalmanKhan },
];

const Men = () => {
  return (
    <Box sx={{ padding: "40px", background: "linear-gradient(to bottom, #ffffff, #f2f2f2)" }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: "#ff6f00",
          textTransform: "uppercase",
          marginBottom: "30px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Celeb-Approved Brands
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
                  borderBottom: "4px solid #ff6f00",
                  filter: "brightness(0.9)",
                }}
              />
              <CardContent sx={{ textAlign: "center", background: "#fafafa" }}>
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

export default Men;
