import React from 'react';
import PropTypes from 'prop-types';

const SuggestionItem = ({ id, label, onClick, image }) => {
    return (
        <li onClick={ () => onClick(id) }>
            <div>
                <img src={ image } style={ { maxHeight: '40px' } }/>
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
    image: PropTypes.string
};

export default SuggestionItem;
