import React from 'react';
import PropTypes from 'prop-types';

Product.propTypes = {
    product : PropTypes.object,
};

function Product({product}) {
    return (
        <div>
            {product.name}
        </div>
    );
}

export default Product;