import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataContext } from '../../DataProvider';
import { FrequencyTable } from '../../searchUtil';
import SuggestionItem from './SuggestionItem';
import { Filter, FILTER_TYPES } from '../../Filter';

const Suggestions = () => {
    const { state, action } = useContext(DataContext);
    const { searchQuery, posts, filter } = state;
    const [suggestions, setSuggestions] = useState([]);

    const searchSuggestion = useCallback((value) => {
        const suggestionsTable = new FrequencyTable(posts);
        return suggestionsTable.search(value.toLowerCase());
    }, [posts]);

    const handleOnClick = (id) => {
        action.filterPosts(new Filter(id, FILTER_TYPES.post));
    };

    useEffect(() => {
        const suggestionsResult = searchSuggestion(searchQuery).map((item) => item.id);

        const result = posts.filter((item) => {
            if (suggestionsResult.includes(item.id)) {
                return item;
            }
        });

        setSuggestions(result);
    }, [searchQuery]);

    const renderNoSuggestionsFound = () => {
        return (
            <div>
                <strong>No posts found</strong>
            </div>
        );
    };

    const renderSuggestions = () => {
        return suggestions.map(({ id, title, coverImage }) => {
            return <SuggestionItem key={ id }
                                   isSelected={filter && filter.value === id}
                                   onClick={ handleOnClick }
                                   image={ coverImage }
                                   id={ id }
                                   label={ title || '' }/>;
        });
    };

    return (
        <ul className="post-filter__suggestion">
            { searchQuery && renderSuggestions() }
            { suggestions.length === 0 && searchQuery && renderNoSuggestionsFound() }
        </ul>
    );
};

export default Suggestions;