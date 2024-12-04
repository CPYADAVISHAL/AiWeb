// src/App.js
// import React from "react";
// import {
//   AppBar,
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Container,
//   Box as MuiBox,
//   createTheme,
//   ThemeProvider,
// } from "@mui/material";
// import { styled, keyframes } from "@mui/system";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Box } from "@react-three/drei";

// // Create a custom theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#6200ea", // Purple
//     },
//     secondary: {
//       main: "#ff8f00", // Amber
//     },
//     background: {
//       default: "#000428", // Dark gradient
//       paper: "#1a237e", // Card background
//     },
//     text: {
//       primary: "#ffffff", // White text
//     },
//   },
// });

// // Handwriting animation keyframes
// const typing = keyframes`
//   from { width: 0 }
//   to { width: 100% }
// `;

// const blink = keyframes`
//   50% { border-color: transparent }
// `;

// // Styled Typography for Handwriting Effect
// const AnimatedTypography = styled(Typography)(({ theme }) => ({
//   fontFamily: "'Roboto Mono', monospace",
//   overflow: "hidden",
//   borderRight: `2px solid ${theme.palette.primary.main}`,
//   whiteSpace: "nowrap",
//   margin: "0 auto",
//   letterSpacing: "2px",
//   animation: `${typing} 4s steps(40, end), ${blink} 1s step-end infinite`,
// }));

// const ARVRPage = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       {/* Header */}
//       <AppBar position="static" sx={{ padding: 2, background: "linear-gradient(to right, #1a237e, #6200ea)" }}>
//         <Typography variant="h4" align="center" color="white">
//           Welcome to the World of AR/VR
//         </Typography>
//       </AppBar>

//       {/* Content */}
//       <MuiBox
//         sx={{
//           background: "radial-gradient(circle, #000428, #004e92)",
//           minHeight: "100vh",
//           color: "white",
//           paddingBottom: 5,
//         }}
//       >
//         <Container sx={{ marginTop: 4 }}>
//           <Grid container spacing={4} alignItems="center">
//             {/* Introduction */}
//             <Grid item xs={12} md={6}>
//               <AnimatedTypography variant="h5" gutterBottom>
//                 Explore AR/VR Technology
//               </AnimatedTypography>
//               <Typography variant="body1" sx={{ marginTop: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
//                 AR (Augmented Reality) and VR (Virtual Reality) are the future of digital interaction. AR brings the
//                 virtual world to your surroundings, and VR immerses you in a completely virtual space. Discover how
//                 these technologies can change your world!
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{
//                   marginTop: 3,
//                   background: "linear-gradient(45deg, #ff6f00, #ff8f00)",
//                   boxShadow: "0px 4px 20px rgba(255, 111, 0, 0.5)",
//                 }}
//                 onClick={() => alert("Try AR/VR Experience!")}
//               >
//                 Try Now
//               </Button>
//             </Grid>

//             {/* 3D Canvas */}
//             <Grid item xs={12} md={6}>
//               <Canvas style={{ height: "300px", background: "#1a237e" }}>
//                 <ambientLight intensity={0.3} />
//                 <directionalLight position={[5, 5, 5]} intensity={1} />
//                 <Box args={[1, 1, 1]} position={[0, 0, 0]}>
//                   <meshStandardMaterial attach="material" color="#ff8f00" />
//                 </Box>
//                 <OrbitControls />
//               </Canvas>
//             </Grid>
//           </Grid>

//           {/* Glasses Section */}
//           <Typography variant="h5" sx={{ marginTop: 6, marginBottom: 3, textAlign: "center" }}>
//             Choose Your Glasses
//           </Typography>
//           <Grid container spacing={3}>
//             {["AR Glasses", "VR Glasses", "Mixed Reality Glasses"].map((item, index) => (
//               <Grid item xs={12} md={4} key={index}>
//                 <Card
//                   sx={{
//                     textAlign: "center",
//                     background: "linear-gradient(45deg, #1a237e, #6200ea)",
//                     color: "white",
//                     boxShadow: "0px 4px 20px rgba(98, 0, 234, 0.6)",
//                   }}
//                 >
//                   <CardContent>
//                     <Typography variant="h6">{item}</Typography>
//                     <Button
//                       variant="outlined"
//                       sx={{
//                         marginTop: 2,
//                         color: "white",
//                         borderColor: "white",
//                         "&:hover": { background: "#ff8f00", borderColor: "#ff8f00" },
//                       }}
//                       onClick={() => alert(`Selected: ${item}`)}
//                     >
//                       Select
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </MuiBox>
//     </ThemeProvider>
//   );
// };

// export default ARVRPage;import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const Arvr = () => {
  const [videoSrc, setVideoSrc] = useState('');
  const [currentGlasses, setCurrentGlasses] = useState(0);
  const socket = io('http://localhost:5001');

  useEffect(() => {
    socket.on('connect', () => {
      console.log("Connected to Flask server via WebSocket");
    });

    socket.on('video_feed', (frame) => {
      const base64 = Buffer.from(frame, 'binary').toString('base64');
      setVideoSrc(`data:image/jpeg;base64,${base64}`);
    });

    socket.on('glasses_switched', (data) => {
      setCurrentGlasses(data.current_glasses);
    });

    socket.emit('get_video_feed');  // Request the video feed initially

    return () => {
      socket.disconnect(); // Clean up WebSocket connection
    };
  }, []);

  const switchGlasses = (direction) => {
    socket.emit('switch_glasses', { direction });
  };

  return (
    <div>
      <h1>AR Glasses Try-On</h1>
      <img src={videoSrc} alt="Video Feed" style={{ width: "480px", height: "640px" }} />
      <div>
        <button onClick={() => switchGlasses(-1)}>Previous Glasses</button>
        <button onClick={() => switchGlasses(1)}>Next Glasses</button>
      </div>
    </div>
  );
};

export default Arvr;
