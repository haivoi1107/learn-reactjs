import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './page/ListPage';
import { Box } from '@material-ui/core';

ProductFeatures.propTypes = {
    
};

function ProductFeatures(props) {
    const match = useRouteMatch();
    return (
        <Box paddingTop={4}>
            <Switch>
                <Route path={match.url} exact component={ListPage}></Route>
            </Switch>
        </Box>
    );
}

export default ProductFeatures;