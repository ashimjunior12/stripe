import React, { useContext } from 'react';
import { useState } from 'react';
import sublinks from './data';

const AppContext = React.createContext('');

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
  const [location,setLocation] = useState({center:'',bottom:''});
  const [page,setPage] = useState([
  {
    page: '',
    links: [],
  }]
  )
  

  const openSubmenu = (page, coordinates) =>{
    const pages = sublinks.find((links)=>links.page===page);
    setLocation(coordinates);
    setPage(pages);
    setIsSubmenuOpen(true);
  }

  const closeSubmenu = () =>{
    setIsSubmenuOpen(false);
  }

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        location,
        page,
        isSubmenuOpen,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
