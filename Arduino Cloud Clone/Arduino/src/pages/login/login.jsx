import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  useMediaQuery,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Carousel from "react-material-ui-carousel";
const images = [
  {
    image:
      "https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Your First Image Title",
    description: "Your First Image Description",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Your Second Image Title",
    description: "Your Second Image Description",
  },
  {
    image:
      "https://images.unsplash.com/photo-1620634415912-ec5aa1e89d0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Your Third Image Title",
    description: "Your Third Image Description",
  },
];
const Item = ({ item }) => {
  return (
    <CardMedia
      component="img"
      height={800}
      image={item.image}
      alt={item.title}
      title={item.title}
    />
  );
};
const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isMdOrLess = useMediaQuery("(max-width: 900px)");

  const handleSignIn = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            {!isMdOrLess && (
              <Carousel
                autoPlay
                animation="slide"
                navButtonsAlwaysVisible
                indicators={false}
                height={700}
              >
                {images.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Carousel>
            )}
          </Card>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: "150px" }}>
          <CardHeader style={{ textAlign: "center" }} title="Sign In" />

          <CardContent>
            <form onSubmit={handleSignIn}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
                required
                error={!email ? "Email is required" : ""}
                helperText={!email && "Please enter your email address"}
                aria-describedby="email-helper-text"
                aria-required={true}
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                fullWidth
                margin="normal"
                required
                error={!password ? "Password is required" : ""}
                helperText={!password && "Please enter your password"}
                aria-describedby="password-helper-text"
                aria-required={true}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button type="submit" variant="contained" fullWidth>
                Sign In
              </Button>
            </form>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};
export default SignInScreen;
