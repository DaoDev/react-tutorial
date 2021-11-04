import { Box } from '@mui/system';
import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
