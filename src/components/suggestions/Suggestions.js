import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { DataContext } from '../../DataProvider';
import { FrequencyTable } from '../../searchUtil';

const Suggestions = () => {
    const { state } = useContext(DataContext);
    const { searchQuery, posts } = state;

    const getSuggestions = useCallback(() => {
        const suggestionsTable = new FrequencyTable(posts);

        console.log(suggestionsTable);

    }, [posts]);

    const renderSuggestions = useCallback(() => {

    }, [searchQuery]);

    getSuggestions();
    return (
        <ul className="post-filter__suggestion">
            <li>Suggestion 1</li>
            <li>Suggestion 2</li>
            <li>Suggestion 3</li>
        </ul>
    );
};

export default Suggestions;
