import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DataContext } from './DataProvider';
import { Filter, FILTER_TYPES } from './Filter';

const ICON_MAP = {
    'places': 'fa-globe',
    'people': 'fa-users'
};

const FilterCategoryItem = ({ id, label, count, slug }) => {
    const { action, state: { selectedCategory } } = useContext(DataContext); // Get the current set ID

    const handleOnClick = () => {
        if (selectedCategory === id) {
            action.filterPosts(null);
            return;
        }
        
        action.filterPosts(new Filter(id, FILTER_TYPES.category));
    };

    const baseClassName = 'post-filter__';
    const activeState = `${ baseClassName }category ${ selectedCategory === id ? `${ baseClassName }category--selected` : '' }`;

    return (
        <div className={ activeState }
             onClick={ handleOnClick }>
            <div className={ `${ baseClassName }icon` }>
                <i className={ `fa ${ ICON_MAP[slug] }` } aria-hidden="true"/>
            </div>
            { label } ({ count })
        </div>
    );
};

FilterCategoryItem.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    count: PropTypes.number,
    slug: PropTypes.string
};

export default FilterCategoryItem;
