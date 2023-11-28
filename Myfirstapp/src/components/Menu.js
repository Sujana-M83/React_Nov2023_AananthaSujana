
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import * as React from 'react';

import { Box } from "@mui/material";




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'



import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import { CardActionArea } from '@mui/material';
export default function CustomizedInputBase() {
  const [count, setCount] = React.useState(1);
  return(
      <div class="o1">
        <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://tse2.mm.bing.net/th?id=OIP.58njq9tGGhlTYyZH7RsszwHaE8&pid=Api&P=0&h=220"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Chicken Biryani
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          SS Hyderabadi Biryani
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br></br>
            Rs.299.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://www.twopeasandtheirpod.com/wp-content/uploads/2021/04/Chicken-Penne-Pasta-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Penne in Pesto
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          Eat Italiano
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br></br>
            Rs.456.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://i1.wp.com/cookingfromheart.com/wp-content/uploads/2017/09/Ceylon-Parotta-2.jpg?resize=683%2C1024&ssl=1"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ceylon Parotta
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          HMR Restaurant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br></br>
            Rs.23.80
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="http://damndelicious.net/wp-content/uploads/2015/12/IMG_0318edit.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Veg Mixed Noodles
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          China Valley
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br></br>
            Rs.23.80
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://1.bp.blogspot.com/-Lmxxa3snXOw/Xul3v_eFFPI/AAAAAAAA0T4/CwazWI4hxPUgaOPnUuElIKFu-uXMIibRgCLcBGAsYHQ/s1600/DSC07980.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Special Shawarma Plate
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          Street Arabiya
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br></br>
            Rs.270.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://valentinascorner.com/wp-content/uploads/2018/04/Easy-Chicken-Fried-Rice-10-of-11-750x1125.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Chicken Schezwan Rice
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          The Cascade Restaurant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br></br>
            Rs.349.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://images.eatsmarter.com/sites/default/files/styles/920x690/public/classic-chicken-club-sandwich-484991.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Tuna Sandwich
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          Subway
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br></br>
            Rs.279.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://www.unicornsinthekitchen.com/wp-content/uploads/2021/07/Strawberry-Milkshake-2.1200px-1-of-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Strawberry Milkshake
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          The London Shakes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br></br>
            Rs.175.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://i.pinimg.com/originals/36/08/75/360875e043dcde499d0d034359efb4db.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Oreo Waffle
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          The Belgian Waffle
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br></br>
            Rs.165.24
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>

  );
}