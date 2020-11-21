import React, { useContext, useEffect, useState } from 'react';
import FilterCategoryItem from './FilterCategoryItem';
import { DataContext } from './DataProvider';

const FilterBar = () => {
    const { state } = useContext(DataContext);
    const { categories, loading: { categories: isLoading } } = state;

    return (
        <div className="post-filter">
            { isLoading && <div> Loading categories...</div> }
            { categories.map((item) => <FilterCategoryItem { ...item } />) }
        </div>
    );
};

export default FilterBar;
