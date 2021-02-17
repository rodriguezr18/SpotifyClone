import React, { createContext, useContext, useReducer } from "react";

  export const DataLayerContext = createContext();
  // children is what is wrapped inside index.js
  export const DataLayer = ({ initialState, reducer, children }) => (
          <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
              {children}
          </DataLayerContext.Provider>
  );

 export const useDataLayerValue = () => useContext(DataLayerContext);

 //2:09  59