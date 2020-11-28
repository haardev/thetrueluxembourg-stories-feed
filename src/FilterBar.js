import React, { useContext } from 'react';
import FilterCategoryItem from './FilterCategoryItem';
import { DataContext } from './DataProvider';
import SearchBar from './SearchBar';

const FilterBar = () => {
    const { state } = useContext(DataContext);
    const { categories, loading: { categories: isLoading } } = state;

    return (
        <div className="post-filter">
            <div className="post-filter__wrapper">
                { isLoading && <div><strong>Loading categories...</strong></div> }
                { categories.map((item) => <FilterCategoryItem key={ item.id } { ...item } />) }
                <SearchBar/>
            </div>
        </div>
    );
};

export default FilterBar;
