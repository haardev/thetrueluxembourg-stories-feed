import React, { useContext } from 'react';
import FilterCategoryItem from './FilterCategoryItem';
import { DataContext } from './DataProvider';
import SearchBar from './SearchBar';

const FilterBar = () => {
    const { state } = useContext(DataContext);
    const { categories, loading: { categories: isLoading } } = state;

    return (
        <div className="post-filter">
            { isLoading && <div><strong>Loading categories...</strong></div> }
            { categories.map((item) => <FilterCategoryItem key={item.id} { ...item } />) }
            <SearchBar />
        </div>
    );
};

export default FilterBar;
