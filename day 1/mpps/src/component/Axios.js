import axios from "axios";
import React, { useEffect, useState } from "react";

//mui

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Axios() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch();
  }, []);

  const url = "https://picsum.photos/v2/list";

  //using try catch

  // const fetch = async () => {
  //   try {
  //     let response = await axios(url);
  //     console.log(response);
  //     let fetchData = response.data;
  //     console.log(fetchData);
  //     setData(fetchData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // using .then
  const fetch = () => {
    axios.get(url).then((response) => {
      console.log(response);
      let fetchData = response.data;
      console.log(fetchData);
      setData(fetchData);
    });
  };
  return (
    <div>
      <h1> card data</h1>

      {data!== undefined && data.length && data.map((result) => {

        return (
          <Card  container rowSpacing={1}  sx={{ maxWidth: 345, margin: 9 }} xs={3}>
            <CardMedia
              key={result.id}
              component="img"
              height="140"
              src={result.download_url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {result.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {result.url}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}


    </div>
  );
}

export default Axios;
