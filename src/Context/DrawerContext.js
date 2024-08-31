
import React, { createContext, useMemo, useState } from 'react'

export const SidebarContext = createContext()
const DrawerContext = ({children}) => {
    const [mobileDrawer, setMobileDrawer] = useState(false)
    const toggleDrawer = () => {
      console.log("Toggling drawer"); 
      setMobileDrawer((prev) => !prev)
    }
    const value = useMemo(() => ({mobileDrawer, toggleDrawer}), [mobileDrawer])
  return (
    <SidebarContext.Provider value={value}>
        {children}
    </SidebarContext.Provider>
  )
}

export default DrawerContext