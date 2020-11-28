import React, { useContext } from 'react';
import Suggestions from './components/suggestions/Suggestions';
import { DataContext } from './DataProvider';

const SearchBar = () => {
    const { state, action } = useContext(DataContext);
    const { searchQuery } = state;
    const { setSearchQuery } = action;

    const handleOnClick = () => {
        action.filterPosts(null);
    };

    return (
        <div>
            <div className="post-filter__search">
                <input type="text"
                       value={ searchQuery }
                       onChange={ (e) => setSearchQuery(e.target.value) }
                       className="post-filter__search-input"/>
                <button className="post-filter__search-submit"
                        onClick={ handleOnClick }>
                    Clear
                </button>
            </div>
            <Suggestions/>
        </div>
    );
};

export default SearchBar;
