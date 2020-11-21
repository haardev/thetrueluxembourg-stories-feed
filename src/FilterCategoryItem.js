import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataContext } from './DataProvider';

const ICON_MAP = {
    'places': 'fa-globe',
    'people': 'fa-people'
}

const FilterCategoryItem = ({ id, label, count, slug }) => {
    const [currentOpen, setCurrent] = useState(false);
    const { action } = useContext(DataContext); // Get the current set ID

    const handleOnClick = () => {
        setCurrent(!currentOpen);
        action.filterPosts(id);
    };

    return (
        <div className="post-filter__category"
             onClick={ handleOnClick }>
            <div className="post-filter__icon">
                <i className="fa fa-globe" aria-hidden="true"/>
            </div>
            { label } ({ count })
            <div className="post-filter__expand">
                <i className={ `fa fa-caret-${ currentOpen === true ? 'up' : 'down' }` }
                   aria-hidden="true"/>
            </div>
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
