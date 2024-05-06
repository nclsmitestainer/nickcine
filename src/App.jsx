import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import SearchContext from './contexts/Search';
import { useState } from 'react';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider
      value={{ showSearch, setShowSearch, search, setSearch }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </SearchContext.Provider>
  );
}

export default App;
