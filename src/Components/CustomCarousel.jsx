import React, { useState, useEffect } from 'react';
import { makeStyles, SwipeableDrawer, IconButton } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
}));

const AutoTransitionCarousel = ({ images, interval = 3000 }) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <SwipeableDrawer
      anchor="left"
      open
      variant="persistent"
      classes={{ paper: classes.drawerPaper }}
    >
      <IconButton onClick={handlePrev} color="inherit">
        left
      </IconButton>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex + 1}`}
        className={classes.image}
      />
      <IconButton onClick={handleNext} color="inherit">
        right
      </IconButton>
    </SwipeableDrawer>
  );
};

export default AutoTransitionCarousel;