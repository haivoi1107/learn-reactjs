import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';
import Test from './Test';

ProductList.propTypes = {
  data: PropTypes.array,
};
ProductList.defaultProps = {
  data: [],
};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
  hover: {
    '&:hover': {
      transform: 'scale(1.05)',
    },
    cursor: 'pointer',
  },
}));

function ProductList({ data }) {
  const classes = useStyles();

  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} className={classes.hover}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      <Typography>
        <Grid container>
          {data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              {/* <Test so={product}/> */}
            </Grid>
          ))}
        </Grid>
      </Typography>
    </Box>
  );
}

export default ProductList;
