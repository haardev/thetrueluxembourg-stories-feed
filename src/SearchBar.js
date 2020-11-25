import React, { useState } from 'react';
import Suggestions from './Suggestions';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <div className="post-filter__search">
                <input type="text"
                       value={ searchQuery }
                       onChange={ (e) => setSearchQuery(e.target.value) }
                       className="post-filter__search-input"/>
                <button className="post-filter__search-submit"
                        onClick={ () => alert(searchQuery) }>
                    Search
                </button>
            </div>
            <Suggestions />
        </div>
    );
};

SearchBar.propTypes = {};

export default SearchBar;
