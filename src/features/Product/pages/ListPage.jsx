import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import productApi from '../../../api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
import { Pagination } from '@material-ui/lab';
import ProductFilters from '../components/ProductFilters';

const useStyle = makeStyles((theme) => ({
  root: {},

  left: {
    width: 250,
  },

  right: {
    flex: 1,
  },

  pagination: {
    display: 'flex',
    flexGrow: 'row nowrap',
    justifyContent: 'center',

    marginTop: 30,
    paddingBottom: 20,
  },
}));

function ListPage(props) {
  const classes = useStyle();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
    _sort: 'salePrice:ASC',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
        console.log(pagination);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }))
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onchange={handleFiltersChange} />
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange} />

              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
