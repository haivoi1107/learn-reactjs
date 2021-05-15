import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilter({filters, onChange}) {
    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;
        const newFilter = {
            ...filters,
            'category.id' : newCategoryId,
        };
        onChange(newFilter);
    }
    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />

        </Box>
    );
}

export default ProductFilter;