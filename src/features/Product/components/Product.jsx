import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';
import { STATIC_HOST, THUMBLENAIL_PLACEHOLDER } from '../../../constants';

Product.propTypes = {
    product : PropTypes.object,
};

function Product({product}) {
    const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBLENAIL_PLACEHOLDER;
    return (
        <Box padding={1}>   
        <Box padding={1}>
        <img 
        src={thumbnailUrl} alt={product.name}
        width='100%'
        ></img>
        </Box>                    
        
        <Typography variant='body2'> {product.name}</Typography>
        <Typography variant='body2'> {product.promotionPercent} - {product.salePrice}</Typography>
       </Box>
    );
}

export default Product;