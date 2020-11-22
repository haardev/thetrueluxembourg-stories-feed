import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataContext } from './DataProvider';

const ICON_MAP = {
    'places': 'fa-globe',
    'people': 'fa-users'
};

const FilterCategoryItem = ({ id, label, count, slug }) => {
    const [currentOpen, setCurrent] = useState(false);
    const { action, state: { selectedCategory } } = useContext(DataContext); // Get the current set ID

    const handleOnClick = () => {
        setCurrent(!currentOpen);
        action.filterPosts(id);
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
    id: PropTypes.string,
    label: PropTypes.string,
    count: PropTypes.number,
    slug: PropTypes.string
};

export default FilterCategoryItem;
