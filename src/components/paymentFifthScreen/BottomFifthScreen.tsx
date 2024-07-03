import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./CheckoutFifthScreen.css";
import ellipse from "../../assets/checkoutIcons/ellipse.svg";
import { Link } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const BottomFifthScreen: React.FC = () => {
  const [progress, setProgress] = React.useState(0);
  let navigate = useNavigate();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 125 : prevProgress + 25
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
        marginLeft: "5vw",
      }}
    >
      <div className="confirmation">Confirmation</div>
      {progress <= 100 ? (
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
      ) : (
        <div>
          <div className="transaction-num">Transaction #1297-8533</div>
          <Box
            alignItems={"center"}
            marginLeft={"5vw"}
            marginTop={"5vh"}
            sx={{
              border: "4px solid blue",
              borderRadius: "16px",
              width: "36vw",
              height: "26vh",
            }}
          >
            <div className="thank-you">Thank you!</div>
            <div className="success-sentence">
              Payement process is completed successfuly
            </div>
          </Box>
          <p className="p">
            A receipt is sent to your email box<br></br>
            You can track the package by using the following link<br></br>
            <Link>www.faketrackingservice.com/track/ABC123456</Link>
          </p>
          <div className="Back-to-Marketplace">
            <Button
              variant="contained"
              sx={{
                width: "36vw",
                backgroundColor: "rgba(0, 0, 255, 0.8)",
                wordWrap: "break-word",
              }}
              onClick={() => navigate("/Dashboard")}
            >
              Back to Marketplace{" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
