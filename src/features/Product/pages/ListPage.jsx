import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import productApi from '../../../api/productApi';

const useStyle = makeStyles((theme) => ({
  root: {},

  left: {
    width: 250,
  },

  right: {
    flex: 1,
  },
}));

function ListPage(props) {
  const classes = useStyle();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll({ _page: 1, _limit: 10 });
        console.log({ response });
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }

      // setLoading(false);
    })();
  });

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>Right column</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
