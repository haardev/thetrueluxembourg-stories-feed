import React from 'react';
import PropTypes from 'prop-types';

const SuggestionItem = ({ id, label, onClick }) => {
    return (
        <li onClick={ () => onClick(id) }>
            { label }
        </li>
    );
};

SuggestionItem.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    onClick: PropTypes.func
};

export default SuggestionItem;
