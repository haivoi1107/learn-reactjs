import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

const useStyles = makeStyles(theme => ({
    root: {},

    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 auto'
    }
}))

function ListPage(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await productApi.getAll({ _page:1, _limit:10});
                setProductList(data);
            } catch (error) {
                console.log('Failed to fetch productList: ', error);
            }
            setLoading(false);
        })();
    }, []); 

    return (
        <Box>
            <Container>
            <Grid container spacing={1}>
                <Grid item className={classes.left}> 
                <Paper elevation={0}>Left Colum</Paper>
                 </Grid>

                <Grid item className={classes.right}> 
                <Paper elevation={0}>
                    {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}    
                </Paper>               
                </Grid>
            </Grid>
            </Container>
           
        </Box>
    );
}

export default ListPage;