import styled from '@emotion/styled';
import { Box } from '@mui/system';
import React from 'react';
import { Toys } from '../../assets/images';

const PortfolioBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const Project = styled(Box)(() => ({
  margin: '70px 0',
  maxWidth: '1000px',
  minHeight: '430px',
  backgroundColor: 'white',
}));
const Portfolio = () => {
  return (
    <PortfolioBox>
      <Project>
        <Box>
          <img src={Toys} alt="Online Store Dummy" />
        </Box>
        <Box></Box>
      </Project>
    </PortfolioBox>
  );
};

export default Portfolio;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Toys } from '@mui/icons-material';

// export default function Portfolio() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image={Toys}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
