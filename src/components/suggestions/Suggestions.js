import React, { useCallback, useContext, useEffect, useState } from 'react';
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
            else return null;
        });

        setSuggestions(result);
    }, [searchQuery, posts, searchSuggestion]);

    const NoSuggestionsFound = () => {
        return (
            <div>
                <strong>No posts found</strong>
            </div>
        );
    };

    const ListOfSuggestions = () => {
        return suggestions.map(({ id, title, coverImage }) => {
            return <SuggestionItem key={ id }
                                   isSelected={ filter && filter.value === id }
                                   onClick={ handleOnClick }
                                   image={ coverImage }
                                   id={ id }
                                   label={ title || '' }/>;
        });
    };

    return (
        <ul className="post-filter__suggestion">
            { searchQuery && <ListOfSuggestions /> }
            { suggestions.length === 0 && searchQuery && <NoSuggestionsFound /> }
        </ul>
    );
};

export default Suggestions;
