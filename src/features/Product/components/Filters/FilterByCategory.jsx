import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({onChange}) {
    const [categoryList, setCategoryList] = useState([])

    useEffect(()=> {
        (async () => {
            try {
                const respose = await categoryApi.getAll()
                console.log('respose', respose);
            } catch (error) {
                
            }
        })()
    }, [])
    return (
       <Box>
           <Typography>DANH MUC SAN PHAM</Typography>
       </Box>
    );
}

export default FilterByCategory;