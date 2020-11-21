import React, { useReducer } from 'react';
import { rootReducer, initialState } from './reducers/rootReducer';
import { getActions } from './actions/mainActions';

const DataContext = React.createContext();

const DataProvider = props => {
    const [authState, dispatch] = useReducer(rootReducer, initialState);

    return (
        <DataContext.Provider
            value={ {
                state: authState,
                action: getActions(dispatch),
            }}>
            { props.children }
        </DataContext.Provider>
    );
};

export { DataProvider, DataContext };
