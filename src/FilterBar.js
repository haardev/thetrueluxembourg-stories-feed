import React from 'react';
import { styled } from '@linaria/react';
import SearchBar from './SearchBar';

const FilterContainer = styled.div`
  width: 300px;
  margin-left: 30px;
  position: sticky;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
`;

const PostFilterWrapper = styled.div`
  border: 1px solid var(--main-bg-color);
`;

const FilterBar = () => {
    return (
        <FilterContainer>
            <PostFilterWrapper>
                <SearchBar/>
            </PostFilterWrapper>
        </FilterContainer>
    );
};

export default FilterBar;
