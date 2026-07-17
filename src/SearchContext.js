import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const SearchContext = createContext(null);

// Wrap your app (in App.js / index.js) with <SearchProvider> so any
// component can call useSearch() to open the modal or push catalogue items
// into it, without prop-drilling through Navbar/Home/Footer.
export const SearchProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openSearch, closeSearch, items, setItems }),
    [isOpen, items]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error('useSearch must be used inside a <SearchProvider>');
  }
  return ctx;
};