import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import '../component/card.css'

function CardParyer(props) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className='cardContent'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.Img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {props.name}
            </Typography>
            <Typography variant="h3" color="text.secondary">
              {props.time}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CardParyer
