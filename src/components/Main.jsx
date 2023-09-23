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
import { Link} from "react-router-dom";
import { useContext } from 'react';
import Context  from '../Data';




export default function Main() {
  const Data = useContext(Context);

  const [value, setValue] = useState(2);
  return (
    <>
      <section className="hero">
        <div>
          <h1>Little Lemon</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            ullam, ipsa <br />
            laudantium quisquam amet eum illo velit reprehenderit ut earum at,
            <br /> similique magnam voluptatem nostrum
            <br /> veritatis expedita numquam optio perferendis!
          </p>
          <br />
          <Link to='/reservation' ><button>Resrve a table</button></Link>
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
              <Button size="small">Order <button onClick={Data.increament} id="add">+</button><p id="order">{Data.order}</p><button onClick={Data.decreament}>-</button></Button>
            </CardActions>
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
              <Button size="small">Order <button onClick={Data.increament}>+</button>{Data.order}<button onClick={Data.decreament}>-</button></Button>
            </CardActions>
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
              <Button size="small">Order <button onClick={Data.increament}>+</button>{Data.order}<button onClick={Data.decreament}>-</button></Button>
            </CardActions>
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
              style={{padding:'10px'}}

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
                Costumer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                rerum eligendi aliquam pariatur amet fugit velit, qui
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
              style={{padding:'10px'}}

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
                Costumer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                rerum eligendi aliquam pariatur amet fugit velit, qui
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
              style={{padding:'10px'}}

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
                Costumer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                rerum eligendi aliquam pariatur amet fugit velit, qui
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
