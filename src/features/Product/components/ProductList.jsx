import { Box, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';
import Test from './Test';

ProductList.propTypes = {
    data: PropTypes.array,
};
ProductList.defaultProps = {
    data : [],
}

function ProductList({data}) {
    return (
        <Box>
            <Grid container>
                {data.map((product) => (                  
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                      
                    </Grid>
                ))}
            </Grid>      
            <Typography>
            <Grid container>
                {data.map((product) => (                  
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Test so={product}/>
                      
                    </Grid>
                ))}
                  </Grid>
            </Typography>
        </Box>

    );
}

export default ProductList;