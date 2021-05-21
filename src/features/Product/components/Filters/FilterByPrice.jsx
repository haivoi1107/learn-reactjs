import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  range: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    '& > span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  button: {
    marginLeft: '16px',
    marginRight: '13px',
  },
  pad: {
    marginLeft: '13px',
    marginRight: '13px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
}));

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const classes = useStyle();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log('e', e.target);
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  const handleReset = () => {
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>

      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
      </Box>

      <Button variant="outlined" color="primary" onClick={handleSubmit} size="small" className={classes.button}>
        Áp Dụng
      </Button>
      <Button variant="outlined" color="primary" onClick={handleReset} size="small" className={classes.pad}>
        Reset
      </Button>
    </Box>
  );
}

export default FilterByPrice;
