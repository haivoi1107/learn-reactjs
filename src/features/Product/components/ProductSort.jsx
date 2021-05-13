import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currenSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({currenSort, onChange}) {

    const handleSortChange = (event, newValue) => {
        if(onChange) onChange(newValue)
    }

    return (
       <Tabs
       value={currenSort}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleSortChange}
        aria-label="disabled tabs example"
       >
           <Tab label='Giá thấp đến cao' value='salePrice:ASC'>
           </Tab>
           <Tab label='Gia cao đến thấp' value='salePrice:DESC'>
           </Tab>
       </Tabs>
    );
}

export default ProductSort;