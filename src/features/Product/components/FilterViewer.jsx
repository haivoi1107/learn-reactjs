import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',

    margin: theme.spacing(2, 0),
    listStyleType: 'none',

    '& > li': {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filter) => '',
    isActive: (filter) => true,
    isVisiable: (filter) => true,
    isRemoveable: true,
    onRemove: (filter) => {},
    onToggle: (filter) => {},
  },
];

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filter = {}, onChange = null }) {
  const classes = useStyle();
  return <Box component="ul" className={classes.root}></Box>;
}

export default FilterViewer;
