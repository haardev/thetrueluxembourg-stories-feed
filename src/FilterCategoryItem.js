import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FilterCategoryItem = ({ id, label, count }) => {
    const [currentOpen, setCurrent] = useState(false);

    useEffect(() => {
        //Load all the posts here
    }, []);
    return (
        <div className="post-filter__category"
             onClick={ () => setCurrent(!currentOpen) }>
            <div className="post-filter__icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
            </div>
            { label } ({ count })
            <div className="post-filter__expand">
                <i className={ `fa fa-caret-${ currentOpen === true ? 'up' : 'down' }` }
                   aria-hidden="true"/>
            </div>
        </div>
    );
};

FilterCategoryItem.propTypes = {};

export default FilterCategoryItem;
