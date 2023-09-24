import React, { useState } from "react";
import Layout from "./Layout";
import hero from "../assets/icons_assets/restauranfood.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../assets/icons_assets/greek salad.jpg";
import img2 from "../assets/icons_assets/bruchetta.svg";
import img3 from "../assets/icons_assets/lemon dessert.jpg";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Data";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Avatar from '@mui/material/Avatar';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main() {
  const Data = useContext(Context);
  const [value, setValue] = useState(2);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="hero">
        <div>
          <h1>Little Lemon</h1>
          <p>
            Little lemon is restauranfood takes chiefs from diiferent background to delivery <br/>varity of foods and experiences, little lemon offfers food delivery<br/> and booking table services too.
          </p>
          <br />
          <Link to="/reservation">
            <button>Resrve a table</button>
          </Link>
        </div>
        <img
          src={hero}
          style={{ width: "280px", height: "280px", borderRadius: "16px" }}
        ></img>
      </section>

      <section className="specials">
        <div className="special">
          <h1>Specials</h1>
          <button>View menu</button>
        </div>
        <div className="Cards">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="160"
              image={img1}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                greek salad <span style={{ color: "#F4CE14" }}>$13.5</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                rerum eligendi aliquam pariatur amet fugit velit, qui
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" onClick={handleClickOpen}>
                Order
              </Button>
            </CardActions>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Order"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  rerum eligendi aliquam pariatur amet fugit velit, qui
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button size="small">
                  Order{"    "}
                  <button onClick={Data.increament} id="add">
                    +
                  </button>
                  <p id="order">{Data.order}</p>
                  <button onClick={Data.decreament}>-</button>
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="160"
              image={img2}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                bruchetta <span style={{ color: "#F4CE14" }}>$13.5</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                rerum eligendi aliquam pariatur amet fugit velit, qui
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" onClick={handleClickOpen}>
                Order
              </Button>
            </CardActions>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Order"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  rerum eligendi aliquam pariatur amet fugit velit, qui
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button size="small">
                  Order{"   "}
                  <button onClick={Data.increament} id="add">
                    +
                  </button>
                  <p id="order">{Data.order}</p>
                  <button onClick={Data.decreament}>-</button>
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="160"
              image={img3}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lemon dessert <span style={{ color: "#F4CE14" }}>$13.5</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                rerum eligendi aliquam pariatur amet fugit velit, qui
              </Typography>
            </CardContent>
            <CardActions>
              
              <Button variant="outlined" onClick={handleClickOpen}>
                Order
              </Button>
            </CardActions>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Order"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  rerum eligendi aliquam pariatur amet fugit velit, qui
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button size="small">
                  Order{"   "}
                  <button onClick={Data.increament} id="add">
                    +
                  </button>
                  <p id="order">{Data.order}</p>
                  <button onClick={Data.decreament}>-</button>
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
        </div>
      </section>
      <section className="testmonial">
        <h1>What our Costumers Say</h1>
        <div className="Cards">
          <Card sx={{ maxWidth: 345 }}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
              style={{ padding: "10px" }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <Avatar alt="Memy Sharp" src="/static/images/avatar/1.jpg" />Mariam
              </Typography>
              <Typography variant="body2" color="text.secondary">
                great idea to do reserve a table page really needed it as a manager , like the food too, tasty
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
              style={{ padding: "10px" }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />Sarah

              </Typography>
              <Typography variant="body2" color="text.secondary">
                great food, great servises, great website, love it
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
              style={{ padding: "10px" }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <Avatar alt="lemy Sharp" src="/static/images/avatar/1.jpg" />liam
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amazing food , really great services too, stright forward design i must say
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
