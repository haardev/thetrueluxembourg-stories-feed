import React, { useContext, useEffect, useState } from 'react';
import { API_CATEGORIES, categoriesTransformer, fetchCategories } from './apiUtils';
import FilterCategoryItem from './FilterCategoryItem';
import useFetch from './hooks/useFetch';
import { DataContext } from './DataProvider';

const FilterBar = props => {
    const [categories, setCategories] = useState([]);
    const { data, isLoading } = useFetch(API_CATEGORIES);

    const {action, state} = useContext(DataContext);

    useEffect(() => {
        if (data) {
            setCategories(categoriesTransformer(data));
            action.getPosts();
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
