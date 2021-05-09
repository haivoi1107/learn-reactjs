import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';


Test.propTypes = {
    so : PropTypes.object,
};

function Test({so}) {
    const so1 = so.name;

    return (
        <Typography variant='body2'> {so1}</Typography>
    );
}

export default Test;