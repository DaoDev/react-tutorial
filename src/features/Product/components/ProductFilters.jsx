import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange:PropTypes.func,
};

function ProductFilters({filters, onChange}) {

    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return
        
        const newFilters = {
            ...filters,
            categoryId: newCategoryId
        }
        onChange(newFilters)
    }

    return (
        <Box>
            <FilterByCategory onchange={handleCategoryChange}/>
            <FilterByPrice />
        </Box>
    );
}

export default ProductFilters;