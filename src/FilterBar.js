import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchCategories } from './apiUtils';
import FilterCategoryItem from './FilterCategoryItem';

const FilterBar = props => {
    const [isFetching, setIsFetching] = useState(false);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const handler = async () => {
            setIsFetching(true);
            const result = await fetchCategories();
            setCategories(result);
            setIsFetching(false);
        };

        handler();
    }, []);

    return (
        <div className="post-filter">
            {isFetching && <div> Loading categories...</div>}
            { categories.map((item) => <FilterCategoryItem { ...item } />) }
        </div>
    );
};

FilterBar.propTypes = {};

export default FilterBar;
