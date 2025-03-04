import { Box, Typography, Button, Container, Stack } from "@mui/material";
import heroImage from "../assets/images/banner_image.jpeg";

export default function Hero() {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 3,
            }}
        >
            {/* Black Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)", // Black overlay with transparency
                }}
            />

            {/* Content */}
            <Container sx={{ position: "relative", zIndex: 1 }}>
                <Stack spacing={3} alignItems="center" color="white">
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{
                            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
                        }}
                    >
                        Miami Real Estate Specialists
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            my: 2,
                            width: { xs: "90%", md: "60%" }, // Adjust width on different screen sizes
                            fontSize: { xs: "1rem", md: "1.25rem" }, // Adjust text size
                        }}
                    >
                        Your specialists in residential and commercial properties. From dream homes to prime business spaces, trust our unique expertise to guide you in Miami/South Florida's dynamic market.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ width: { xs: "100%", sm: "auto" } }} // Button takes full width on small screens
                    >
                        Get Started
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
