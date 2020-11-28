import React from 'react';
import PropTypes from 'prop-types';

const SuggestionItem = ({ id, label, onClick, image, isSelected }) => {
    const className = isSelected ? 'post-filter--selected' : '';
    return (
        <li className={ className }
            onClick={ () => onClick(id) }>
            <div>
                <img src={ image } alt="N/A"/>
            </div>
            <div>
                { label }
            </div>
        </li>
    );
};

SuggestionItem.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    onClick: PropTypes.func,
    image: PropTypes.string,
    isSelected: PropTypes.bool
};

export default SuggestionItem;
