import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

ProductSkeletonFilter.propTypes = {
  length: PropTypes.number,
};
ProductSkeletonFilter.defaultProps = {
  length: 10,
};
const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '1000px',
  },
}));

function ProductSkeletonFilter({ length }) {
  const classes = useStyle();
  console.log(length);

  return (
    <Box className={classes.root}>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid key={index} item xs={12} height={200}>
            <Box padding={1}>
              <Skeleton></Skeleton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonFilter;
