import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { API_CATEGORIES, categoriesTransformer, fetchCategories } from './apiUtils';
import FilterCategoryItem from './FilterCategoryItem';
import useFetch from './hooks/useFetch';

const FilterBar = props => {
    const [categories, setCategories] = useState([]);
    const { data, isLoading } = useFetch(API_CATEGORIES);

    useEffect(() => {
        if (data) {
            setCategories(categoriesTransformer(data));
        }
    }, [data]);

    return (
        <div className="post-filter">
            { isLoading && <div> Loading categories...</div> }
            { categories.map((item) => <FilterCategoryItem { ...item } />) }
        </div>
    );
};

FilterBar.propTypes = {};

export default FilterBar;
