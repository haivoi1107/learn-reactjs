import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Tab, Tabs } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

ProductSort.propTypes = {
  currenSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  up: {},
  down: {},
}));

function ProductSort({ currenSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  const classes = useStyle();

  return (
    <Tabs
      value={currenSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp đến cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá cao đến thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
