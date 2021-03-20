import React from 'react';
import SearchBar from './SearchBar';

const FilterBar = () => {
    return (
        <div className="post-filter">
            <div className="post-filter__wrapper">
                <SearchBar/>
            </div>
        </div>
    );
};

export default FilterBar;
