import { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

// children, the thing that was in the datalayer
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
