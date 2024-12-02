import React from "react";
import { Grid, Typography, Avatar, Box, Link } from "@mui/material";
import tofiqImage from "../../image/tofiq.png";
import cpyadavImage from "../../image/cp.jpeg";
import teacherImage from "../../image/Jaspal.jpg"; // Add the image of the teacher

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        py: 4,
        background: "linear-gradient(to bottom, #b2ebf2, #ffffff)", // Light pastel gradient (blue to white)
      }}
    >
      {/* Footer Content */}
      <Grid container spacing={2} justifyContent="center">
        {/* Section 1: Title */}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#1976d2", // Light blue for the title
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Future of E-Shopping
          </Typography>
        </Grid>

        {/* Section 2: Team */}
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#00796b", // Light teal for section heading
              mb: 3,
              textTransform: "uppercase",
            }}
          >
            Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Team Member 1 */}
            <Grid item>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  src={teacherImage}
                  alt="Teacher Name"
                  sx={{
                    width: 160, // Bigger avatar size for the teacher
                    height: 160,
                    border: "4px solid #00796b", // Light teal border
                    mb: 1,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00796b" }}>
                  JASPAL SIR
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic", mb: 2, color: "#00796b" }}>
                  MENTOR
                </Typography>
              </Box>
            </Grid>
            {/* Team Member 2 */}
            <Grid item>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  src={tofiqImage}
                  alt="Tofique"
                  sx={{
                    width: 160,
                    height: 160,
                    border: "4px solid #00796b", // Light teal border
                    mb: 1,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#00796b" }}>
                  Tofique
                </Typography>
                <Link
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  underline="hover"
                  color="primary" // Primary color for the LinkedIn link
                >
                  LinkedIn
                </Link>
              </Box>
            </Grid>

            {/* Team Member 3 */}
            <Grid item>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  src={cpyadavImage}
                  alt="C P Yadav"
                  sx={{
                    width: 160,
                    height: 160,
                    border: "4px solid #00796b", // Light teal border
                    mb: 1,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#00796b" }}>
                  C P Yadav
                </Typography>
                <Link
                  href="https://www.linkedin.com/in/chandra-prakash-yadav-b22783228/"
                  target="_blank"
                  underline="hover"
                  color="primary" // Primary color for the LinkedIn link
                >
                  LinkedIn
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="body2"
          sx={{
            color: "#00796b", // Light teal for the bottom text
            fontWeight: "light",
          }}
        >
          COPYRIGHT © 2024 ALL RIGHTS RESERVED
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
