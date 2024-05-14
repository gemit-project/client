import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./CheckoutFifthScreen.css";
import ellipse from "../../assets/checkoutIcons/ellipse.svg";

export const BottomFifthScreen: React.FC = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 25
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        display: "inline-flex",
        gap: "55px",
        position: "absolute",
        marginTop: "80px",
        marginLeft: "10vw",
      }}
    >
      <div className="confirmation">Confirmation</div>
      <Box
        height={"50vh"}
        width={"44vw"}
        position="relative"
        display="inline-flex"
        alignItems="center"
        sx={{
          border: "2px solid grey",
          borderRadius: "15px",
          backgroundColor: "rgba(248, 248, 248, 1)",
        }}
      >
        <Box
          sx={{
            top: 120,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <CircularProgress
              variant="determinate"
              sx={{
                color: "rgba(217, 217, 217, 1)",
              }}
              size={150}
              value={100}
            />
            <CircularProgress
              variant="determinate"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "rgba(0, 0, 255, 1)"
                    : "#308fe8",
                position: "absolute",
                left: 0,
              }}
              size={150}
              value={progress}
            />
          </Box>
        </Box>
        <Box
          sx={{
            top: 120,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="rgba(0, 0, 255, 1)"
            position="relative"
          >
            <img
              alt=""
              style={{ width: "120px", height: "120px" }}
              src={ellipse}
            ></img>
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "25%",
                fontSize: "12px",
              }}
            >
              {progress === 100 ? "Completed" : "In progress"}
            </div>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
